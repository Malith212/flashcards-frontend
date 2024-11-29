import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FlashcardList() {
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/flashcards")
            .then(response => setFlashcards(response.data))
            .catch(error => console.error("Error fetching flashcards:", error));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Flashcards</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {flashcards.map(fc => (
                    <div key={fc.id} className="p-4 border rounded shadow">
                        <p className="font-semibold">Q: {fc.question}</p>
                        <p className="text-gray-700">A: {fc.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FlashcardList;
