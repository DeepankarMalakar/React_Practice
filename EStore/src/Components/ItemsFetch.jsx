import { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";

const ItemsFetch = ({ searchTerm, categoryFilter }) => {
    const [items, setItems] = useState([]);
    const products = "https://fakestoreapi.com/products";

    const fetchData = async () => {
        try {
            const response = await fetch(products);
            const json = await response.json();
            setItems(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Filter items based on the searchTerm prop
    const filteredItems = items.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = !categoryFilter || item.category.toLowerCase() === categoryFilter.toLowerCase()
        return matchesSearch && matchesCategory
    }
    );


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-10 mt-10">
            {filteredItems.map((item) => (
                <ItemsCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemsFetch;
