function Categories() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");

    const handleAddCategory = () => {
        setCategories([...categories, newCategory]);
        setNewCategory("");
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Categories</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="New Category"
                    className="border p-2 rounded w-full"
                />
                <button
                    onClick={handleAddCategory}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Category
                </button>
            </div>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} className="p-2 border rounded mb-2">{category}</li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
