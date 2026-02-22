import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import dataJson from '../data/categories.json'
import fetchImages from '../components/api'
import "./BoardGamePage.css";
import { useParams } from "react-router";


function BoardGame() {
    const { category } = useParams();
    const { difficulty } = useParams();
    const [cards, setCards] = useState([]);
    const [promptWord, setPromptWord] = useState("");
    const [isGameReady, setIsGameReady] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [phase, setPhase] = useState("preview");
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isGameReady) return;
        if (phase !== "playing") return;

        const id = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(id);
    }, [isGameReady, phase])


    function shuffleAndPick(wordsArray) {
        const copy = [...wordsArray];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        const difficultyMap = {
            easy: 9,
            medium: 12,
            hard: 15
        };
        const count = difficultyMap[difficulty] || 9;
        return copy.slice(0, count);
        // return copy.slice(0, 9);
    }

    useEffect(() => {
        const run = async () => {
            setIsGameReady(false);
            setPhase("preview");
            setPromptWord("");
            setSeconds(0);
            const loadImage = (word) => fetchImages(word);

            const categoryData = dataJson.find(d => d[category]);
            if (categoryData && categoryData[category]) {
                const chosenNames = shuffleAndPick(categoryData[category]);


                const initialCards = await Promise.all(
                    chosenNames.map(async (word) => ({
                        label: word,
                        show: true,
                        image: await loadImage(word),
                    }))
                );


                setCards(initialCards);
                setTimeout(() => {
                    const copyCard = [...initialCards];
                    const result = copyCard.map(card => ({
                        label: card.label,
                        show: false,
                        image: card.image
                    }))
                    setCards(result)
                    setPhase("playing");
                }, 5000)

                const firstWord = initialCards[Math.floor(Math.random() * initialCards.length)].label;
                setPromptWord(firstWord);
                setIsGameReady(true);

            }
        }

        run();


    }, [category]);




    const pickNextWord = (currentCards) => {
        const remainingCards = currentCards.filter(c => !c.show);
        if (remainingCards.length > 0) {
            const nextWord = remainingCards[Math.floor(Math.random() * remainingCards.length)].label;
            setPromptWord(nextWord);
        } else {
            setPhase("finished");
            setPromptWord(`Well done you finished the board with ${step} moves!`);
        }
    };

    const handleCardClick = (clickedLabel) => {
        const countSteps = step;
        setStep(countSteps + 1);
        if (clickedLabel === promptWord) {
            const updatedCards = cards.map(card =>
                card.label === clickedLabel ? { ...card, show: true } : card
            );
            setCards(updatedCards);
            pickNextWord(updatedCards);
        } else {
            console.log("Wrong card");
            const showCard = cards.map(card =>
                card.label === clickedLabel ? { ...card, show: true } : card
            );
            setCards(showCard);
            setTimeout(() => {
                setCards(prevCards =>
                    prevCards.map(card =>
                        card.label === clickedLabel ? { ...card, show: false } : card
                    )
                );
            }, 1000);

        }
    };

    if (!isGameReady) return <div>loading</div>;

    return (
        <div className="board-game-page">
            <div className="bg-noise" />
            <div className="game-header">
                <div className="timer">Time: {seconds}s</div>

                {phase === "playing" && (
                    <div className="click">Moves: {step}
                        <h2>find: <span className="highlight">{promptWord}</span></h2>
                    </div>
                )}
                {phase === "finished" && (
                    <div className="win-banner">🎉 Well done! You finished the board with {step} moves!.</div>
                )}
            </div>
            <div className="board-container" >
                {cards.map(card => (
                    <Card
                        key={card.label}
                        card={card}
                        handleCardClick={() => handleCardClick(card.label)}
                    />
                ))}
            </div>
        </div>
    );
}





export default BoardGame



