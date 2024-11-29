import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Quiz() {
    const [flashcards, setFlashcards] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        // Fetch flashcards from the backend
        axios.get("http://127.0.0.1:5000/flashcards")
            .then(response => setFlashcards(response.data))
            .catch(error => console.error("Error fetching flashcards:", error));
    }, []);

    const handleNextQuestion = () => {
        setShowAnswer(false);
        setCurrentQuestion((prev) => (prev + 1) % flashcards.length);
    };

    if (!flashcards.length) return <div>Loading...</div>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Quiz</h1>
            <div className="p-4 border rounded shadow mb-4">
                <p className="text-lg font-medium">Q: {flashcards[currentQuestion].question}</p>
                {showAnswer && <p className="text-gray-700 mt-2">A: {flashcards[currentQuestion].answer}</p>}
            </div>
            <div>
                <button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-2"
                >
                    {showAnswer ? "Hide Answer" : "Show Answer"}
                </button>
                <button
                    onClick={handleNextQuestion}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mx-2"
                >
                    Next Question
                </button>
            </div>
        </div>
    );
}

export default Quiz;
