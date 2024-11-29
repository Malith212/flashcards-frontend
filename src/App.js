import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import FlashcardList from './FlashcardList';
import AddFlashcard from './AddFlashcard';
import Quiz from './Quiz';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="max-w-6xl mx-auto py-8">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/flashcards" element={<FlashcardList />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
