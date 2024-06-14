// src/App.js
import React from 'react';
import HeroList from './components/HeroList';
import AddHero from './components/AddHero';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hero CRUD Application</h1>
            </header>
            <main>
                <AddHero />
                <HeroList />
            </main>
        </div>
    );
}

export default App;
