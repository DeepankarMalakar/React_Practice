import { useEffect, useState } from "react";
import Card from "./Card";

function CardFetch() {
    const [data, setData] = useState([]);
    // const [filterData, setFilterData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.sampleapis.com/cartoons/cartoons2D");
            const json = await response.json();
            setData(json);
            console.log(json);
        } catch (error) {
            console.error("Error has occurred:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 shadow-2xl rounded-lg">
            {data.map((cartoon) => (
                <Card key={cartoon.id} cartoon={cartoon} />
            ))}
        </div>
    );
}

export default CardFetch;
