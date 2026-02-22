import CategoryCard from "./CategoryCard";
import categoryImages from "../data/categoryImages";

export default function CategoryGrid({ categories, onSelect }) {
    return (
        <div className="grid">
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
