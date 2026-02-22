import { Route, Routes, useNavigate } from 'react-router'
import dataJson from "../data/categories.json";
import CategoryGrid from "../components/CategoryGrid";
import ChooseDifficulty from '../components/ChooseDifficulty'
import { useState } from 'react';
import { Button } from '@mantine/core';

export default function CategoriesPage() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);


    const categoryNames = dataJson.map(
        item => Object.keys(item)[0]
    );

    const handleCategorySelect = (category) => {
        console.log(category)
        setSelectedCategory(category);
    }

    const handleDifficultySelect = (difficulty) => {
        console.log(difficulty)
        setSelectedDifficulty(difficulty);
    }


    const handlePlay = (category, difficulty) => {
        console.log(category, difficulty);
        navigate(`/play/${selectedCategory}/${selectedDifficulty}`);
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
                onSelect={handleCategorySelect}
            />
            <ChooseDifficulty
                difficulty={selectedDifficulty}
                onSelect={handleDifficultySelect}
            />
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', maxWidth: 200, margin: '0 auto' }}>
                <Button onClick={handlePlay}>Play</Button>
            </div>
        </div>
    );
}