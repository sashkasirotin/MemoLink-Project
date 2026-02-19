import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import dataJson from '../data/categories.json'
import fetchImages from '../components/api'

function BoardGame({ category }) {

    const [cards, setCards] = useState([]);
    const [promptWord, setPromptWord] = useState("");
    const [isGameReady, setIsGameReady] = useState(false);


    function shuffleAndPick(wordsArray) {
        const copy = [...wordsArray];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy.slice(0, 9);
    }

    useEffect(() => {
        const run = async () => {
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
            setPromptWord("Well done you finished the board");
        }
    };

    const handleCardClick = (clickedLabel) => {
        console.log(clickedLabel + "||" + promptWord)
        if (clickedLabel === promptWord) {
            const updatedCards = cards.map(card =>
                card.label === clickedLabel ? { ...card, show: true } : card
            );
            console.log(updatedCards)
            setCards(updatedCards);
            pickNextWord(updatedCards);
        } else {
            console.log("Wrong card");
        }
    };

    if (!isGameReady) return <div>loading</div>;

    return (
        <div className="board-game-page">
            <div className="game-header">
                <h2>find: <span className="highlight">{promptWord}</span></h2>
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



