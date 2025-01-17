import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import BASE_URL from "../assets/Constants";

function FoodBody() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await fetch(BASE_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const json = await response.json();
                console.log(json);
                setData(json);
            } catch (error) {
                setError("Unable to fetch data");
            } finally {
                setLoading(false); // Set loading to false after fetch attempt
            }
        };
        fetchFoodData();
    }, []);

    if (error) return <div className="text-red-500 text-center mt-4">{error}</div>;
    if (loading) return <div className="text-center text-lg font-semibold mt-4">Loading...</div>;

    return (
        <div className="bg-cover bg-center bg-[url('../src/assets/bg.png')] h-screen flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {data?.map((food) => (
                    <FoodCard key={food?.name} foodData={food} />
                ))}
            </div>
        </div>
    );
}

export default FoodBody;
