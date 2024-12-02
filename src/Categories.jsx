import React, { useState } from "react";

function Categories({ onSelectCategory }) {
    const [newCategory, setNewCategory] = useState("");
    const [categories, setCategories] = useState(["Math", "Science", "History"]);

    const handleAddCategory = () => {
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
            setNewCategory("");
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Categories</h1>
            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    placeholder="Add New Category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="p-2 border rounded flex-grow mr-2"
                />
                <button
                    onClick={handleAddCategory}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Add
                </button>
            </div>
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => onSelectCategory(category)}
                        className="p-2 border rounded mb-2 cursor-pointer hover:bg-blue-100"
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
