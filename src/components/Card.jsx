import React from "react";

function Card({ card }) {
    console.log(card)
    return (
        <div className="card-container">
            {/* {card.show ? <img src={card.image} alt={card.label} /> : <span>?</span>} */}
            {card.label}
        </div>
    )

}

export default Card