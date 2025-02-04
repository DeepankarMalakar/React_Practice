const Items = ({ items, setItems }) => {
    const handleAddItem = () => {
        setItems([...items, { name: "", description: "", qty: 1, price: 0 }]);
    };

    const handleRemoveItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="mb-6">
            <h3 className="font-semibold text-lg mb-4 text-blue-600">Item:</h3>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 items-center">
                        <input
                            type="text"
                            placeholder="Item name"
                            value={item.name}
                            onChange={(e) => {
                                const newItems = [...items];
                                newItems[index].name = e.target.value;
                                setItems(newItems);
                            }}
                            className="border rounded-md p-2"
                        />
                        <input
                            type="text"
                            placeholder="Item description"
                            value={item.description}
                            onChange={(e) => {
                                const newItems = [...items];
                                newItems[index].description = e.target.value;
                                setItems(newItems);
                            }}
                            className="border rounded-md p-2"
                        />
                        <input
                            type="number"
                            placeholder="Qty"
                            value={item.qty}
                            onChange={(e) => {
                                const newItems = [...items];
                                newItems[index].qty = parseInt(e.target.value || 1, 10);
                                setItems(newItems);
                            }}
                            className="border rounded-md p-2"
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={item.price}
                            onChange={(e) => {
                                const newItems = [...items];
                                newItems[index].price = parseFloat(e.target.value || 0);
                                setItems(newItems);
                            }}
                            className="border rounded-md p-2"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveItem(index)}
                            className="text-white bg-red-700 p-2 rounded-lg hover:bg-white hover:text-red-700 hover:border-red-700 hover:border"
                        >
                            Delete 🗑️
                        </button>
                    </div>
                ))}
            </div>
            <button
                type="button"
                onClick={handleAddItem}
                className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500"
            >
                Add Item
            </button>
        </div>
    );
};

export default Items;
