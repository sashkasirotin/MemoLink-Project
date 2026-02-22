
export default function CategoryCard({ name, image, onClick }) {
    return (
        <div className="card" onClick={() => onClick(name)}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
    );
}


/* export function CategoryCard({ card, handleCardClick }) {

    return (
        <div className="categoryCard-container" onClick={handleCardClick}>
            < img src="https://i.pinimg.com/736x/29/39/df/2939df919e217be83370d2c1dcc80965.jpg" alt="animals"></img>

        </div >
    )
} */