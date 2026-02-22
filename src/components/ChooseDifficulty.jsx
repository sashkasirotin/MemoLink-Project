import { Select } from '@mantine/core';


export default function ChooseDifficulty({ selectedValue, onSelect }) {
    return (
        <Select
            label="Choose Difficulty"
            placeholder="Pick value"
            data={['easy', 'medium', 'hard']}
            value={selectedValue}
            onChange={onSelect}
            defaultValue="easy"
            clearable
        />
    );
}

