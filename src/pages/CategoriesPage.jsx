import { Route, Routes, useNavigate } from 'react-router'
import dataJson from "../data/categories.json";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoriesPage() {
    const navigate = useNavigate();

    const categoryNames = dataJson.map(
        item => Object.keys(item)[0]
    );

    const handleSelect = (category) => {
        navigate(`/play/${category}`);
    };

    return (
        <>
            <h1>Select a Category</h1>
            <CategoryGrid
                categories={categoryNames}
                onSelect={handleSelect}
            />
        </>
    );
}