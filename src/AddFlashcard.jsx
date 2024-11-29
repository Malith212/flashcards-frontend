import React, { useState } from 'react';
import axios from 'axios';

function AddFlashcard() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:5000/flashcards", { question, answer });
            alert("Flashcard added!");
            setQuestion("");
            setAnswer("");
        } catch (error) {
            console.error("Error adding flashcard:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-lg font-bold mb-2">Add New Flashcard</h2>
            <div className="mb-2">
                <label className="block font-medium">Question</label>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block font-medium">Answer</label>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">
                Add Flashcard
            </button>
        </form>
    );
}

export default AddFlashcard;
