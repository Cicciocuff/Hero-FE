import React, { useState } from 'react';
import { addHero } from '../api'; // Import aggiornato
import '../styles.css';

const AddHero = () => {
    const [name, setName] = useState('');
    const [superpower, setSuperpower] = useState('');
    const [mainEnemy, setMainEnemy] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newHero = { name, superpower, mainEnemy };
        await addHero(newHero);
        setName('');
        setSuperpower('');
        setMainEnemy('');
        
        const updatedHeroes = await fetchHeroes();
    };

    return (
        <div className="container">
            <h1>Add Hero</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Superpower:</label>
                    <input type="text" value={superpower} onChange={(e) => setSuperpower(e.target.value)} />
                </div>
                <div>
                    <label>Main Enemy:</label>
                    <input type="text" value={mainEnemy} onChange={(e) => setMainEnemy(e.target.value)} />
                </div>
                <button type="submit">Add Hero</button>
            </form>
        </div>
    );
};

export default AddHero;
