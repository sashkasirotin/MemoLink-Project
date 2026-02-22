import classes from "./CategoryCard.module.css";


export default function CategoryCard({ name, image, onClick }) {
    return (
        <button type="button" className={classes.card} onClick={() => onClick(name)}>
            <div className={classes.thumb}>
                <img src={image} alt={name} />
            </div>
            <span className={classes.label}>{name}</span>
        </button>
    );
}


/* export function CategoryCard({ card, handleCardClick }) {

    return (
        <div className="categoryCard-container" onClick={handleCardClick}>
            < img src="https://i.pinimg.com/736x/29/39/df/2939df919e217be83370d2c1dcc80965.jpg" alt="animals"></img>

        </div >
    )
} */