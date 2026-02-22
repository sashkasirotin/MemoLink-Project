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
        <div
            style={{
                minHeight: "100vh",
                padding: "28px 16px",
                background: `
          radial-gradient(1200px 700px at 20% 15%, rgba(120, 160, 255, 0.35), transparent 60%),
          radial-gradient(900px 600px at 80% 30%, rgba(255, 140, 180, 0.28), transparent 55%),
          radial-gradient(1000px 700px at 55% 90%, rgba(120, 255, 220, 0.22), transparent 60%),
          linear-gradient(180deg, #f6f8ff 0%, #eef2ff 60%, #f7fbff 100%)
        `,
            }}
        >
            <div className='headline' style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Select a Category</h1>
            </div>
            <CategoryGrid
                categories={categoryNames}
                onSelect={handleSelect}
            />
        </div>
    );
}