import React from 'react';
import FlashcardList from './FlashcardList';
import AddFlashcard from './AddFlashcard';

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-2xl mx-auto py-8">
                <AddFlashcard />
                <FlashcardList />
            </div>
        </div>
    );
}

export default App;
