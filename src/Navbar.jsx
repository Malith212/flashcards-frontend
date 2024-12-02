import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="max-w-6xl mx-auto flex justify-between">
                <h1 className="text-xl font-bold">Flashcards App</h1>
                <div>
                    <Link className="px-3 hover:underline" to="/">Home</Link>
                    <Link className="px-3 hover:underline" to="/flashcards">Flashcards</Link>
                    <Link className="px-3 hover:underline" to="/quiz">Quiz</Link>
                    <Link className="px-3 hover:underline" to="/categories">Categories</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
