const API_URL = 'http://localhost:8080/api/heroes';

export const fetchHeroes = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch heroes');
    }
    return await response.json();
};

export const addHero = async (hero) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
    });
    if (!response.ok) {
        throw new Error('Failed to add hero');
    }
    return await response.json();
};

export const deleteHero = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete hero');
    }
};
