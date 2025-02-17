import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductFetch({searchTerm}) {
    const [items, setItems] = useState([])
    const PRODUCTS = "https://dummyjson.com/products";

    const fetchProducts = async () => {
        try {
            const response = await fetch(PRODUCTS)
            const json = await response.json()
            setItems(json.products)
            console.log(json.products)
        }
        catch (error) {
            console.error("Error fetching the data: ", error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-10 mt-5">
            {
                filteredItems.map((item) => (
                    <ProductCard key={item.id} item={item}/>
                ))
            }
        </div>
    )
}

export default ProductFetch
