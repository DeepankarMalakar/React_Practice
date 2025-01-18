import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import BASE_URL from "../assets/Constants";
import Navbar from "./Navbar";

function FoodBody() {
    const [data, setData] = useState(null);             // for data
    const [loading, setLoading] = useState(true);      // for loading
    const [error, setError] = useState(null);          // for error
    const [searchQuery, setSearchQuery] = useState(""); // for search input state
    const [type, setType] = useState("All")       // Type of food

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await fetch(BASE_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const json = await response.json();
                // console.log(json);
                setData(json);
            } catch (error) {
                setError("Unable to fetch data");
            } finally {
                setLoading(false); // Set loading to false after fetch attempt
            }
        };
        fetchFoodData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase()); // Update search input
    };

    const filteredData = data?.filter((food) =>
        food.name.toLowerCase().includes(searchQuery) && (type == 'All' || food.type.toLowerCase() === type.toLowerCase()) // Filtering both input and type based on search input and type
    );

    if (error) return <div className="text-red-500 text-center mt-4">{error}</div>;
    if (loading) return <div className="text-center text-lg font-semibold mt-4">Loading...</div>;

    // Based on type filtering
    const typeFiltering = (selectedType) => {
        setType(selectedType)
    }

    return (

        <>
            <Navbar handleSearch={handleSearchChange} handleType={typeFiltering} />
            <div className="bg-cover bg-center bg-[url('../src/assets/bg.png')] h-screen flex justify-center font-inter">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {filteredData?.map((food) => (
                        <FoodCard key={food?.name} foodData={food} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default FoodBody;
