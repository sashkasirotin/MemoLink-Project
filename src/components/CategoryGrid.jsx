import CategoryCard from "./CategoryCard";
import categoryImages from "../data/categoryImages";
import classes from "./CategoryGrid.module.css";

export default function CategoryGrid({ categories, onSelect }) {
    return (
        <div className={classes.grid}>
            {categories.map((name) => (
                <CategoryCard
                    key={name}
                    name={name}
                    image={categoryImages[name]}
                    onClick={onSelect}
                />
            ))}
        </div>
    );
}
