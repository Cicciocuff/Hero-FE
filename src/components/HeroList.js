import React, { useEffect, useState } from 'react';
import { fetchHeroes, deleteHero } from '../api'; // Import aggiornato
import '../styles.css';

const HeroList = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        const getHeroes = async () => {
            const heroes = await fetchHeroes();
            setHeroes(heroes);
        };

        getHeroes();
    }, []);

    const handleDelete = async (id) => {
        await deleteHero(id);
        setHeroes(heroes.filter(hero => hero.id !== id));
    };

    return (
        <div className="container">
            <h1>Heroes</h1>
            <ul>
                {heroes.map(hero => (
                    <li key={hero.id}>
                        <span>{hero.name} - {hero.superpower} - {hero.mainEnemy}</span>
                        <button className="delete-button" onClick={() => handleDelete(hero.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeroList;
