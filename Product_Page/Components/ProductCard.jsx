function ProductCard({ item }) {
    return (
        <div className="w-72 h-auto border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden bg-white flex justify-center items-center">
            <div className="w-36 border-r border-gray-300">
                <img
                    src={item?.images?.[0] || "https://images.squarespace-cdn.com/content/v1/530cd931e4b0e49b19b254ec/ef572341-cfa5-48b4-823e-195af17cbcf3/final+logo++copy-1+%281%29.png"}
                    alt={item?.title || "Product Image"}
                    className="w-[200px] h-[200px]"
                />
            </div>

            <div className="w-36 border-gray-400 flex flex-col space-y-2 ml-2">
                <span className="text-orange-400 font-semibold">{item?.title}</span>
                <div className="flex justify-start space-x-1 items-center font-semibold">
                    <span className="text-red-600">{item?.rating}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-1 text-amber-300">
                        <path d="M12 .587l3.668 7.425 8.215 1.195-5.945 5.79 1.403 8.187L12 18.56l-7.341 3.624 1.403-8.187L.117 9.207l8.215-1.195L12 .587z" />
                    </svg>
                </div>
                <span className="font-semibold text-green-600">{`₹ ${item.price}`}</span>
            </div>
        </div>
    )
}

export default ProductCard
