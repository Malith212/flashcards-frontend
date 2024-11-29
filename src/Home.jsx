import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Flashcards Quiz App</h1>
            <p className="text-lg text-gray-700 mb-8">
                Create, study, and quiz yourself on custom flashcards. A fun way to learn!
            </p>
            <div>
                <Link to="/flashcards" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-2">
                    Flashcards
                </Link>
                <Link to="/quiz" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mx-2">
                    Start Quiz
                </Link>
            </div>
        </div>
    );
}

export default Home;
