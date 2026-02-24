import React from "react";

function Card({ card, handleCardClick }) {

    return (
        <div className="card-container" onClick={handleCardClick}>
            {card.show ? <img src={card.image} alt={card.label} /> :
                < img src={"https://upload.wikimedia.org/wikipedia/commons/a/af/Question_mark.png"} alt="question-mark"></img>}
        </div >
    )

}

export default Card