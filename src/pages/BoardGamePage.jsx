import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import dataJason from '../data/categories.json'

function BoardGame({ category, urlPrefix }) {
    const [showCard, setShowCard] = useState([])
    const [cardImage, setCardImage] = useState([]);
    const [promptWord, setPromptWord] = useState([]);
    const words = dataJason.find(d => d[category]);
    console.log(words[category])


    function getRandomName(words) {
        const copy = words.slice();
        const count = 9;

        for (let i = copy.length - 1; i >= copy.length - count; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }

        return copy.slice(copy.length - count);
    }


    const choosenCards = getRandomName(words[category]);

    const [cards, setCards] = useState(choosenCards.map(word => {
        return { label: word, show: false, image: word }
    }))

    // const getRandomWord = () => {
    //     const randomIndex = Math.floor(Math.random() * cardImage.length);
    //     const randomLabel = cardImage[randomIndex].label;
    //     return randomLabel;

    // }

    return (
        <div className="board-container">
            {cards.map(card => (
                <Card
                    key={card.label}
                    card={card}
                />
            ))}
            {/* <p>Find: {getRandomWord}</p> */}
            <div>

            </div>
        </div>
    )

}

export default BoardGame



