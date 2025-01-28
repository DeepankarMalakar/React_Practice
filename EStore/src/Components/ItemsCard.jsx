function ItemsCard({ item }) {
    return (
        <div className="w-64 h-auto border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden bg-white">
            {/* Image Section */}
            <div className="h-48">
                <img
                    src={item?.image}
                    alt="Image"
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Content Section */}
            <div className="p-4 space-y-2">
                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 truncate">{item?.title}</h2>
                
                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">{item?.description}</p>
                
                {/* Price and Rating */}
                <div className="flex justify-between items-center pt-2">
                    <p className="text-base font-semibold text-green-600">${item?.price}</p>
                    <div className="flex items-center text-yellow-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-1">
                            <path d="M12 .587l3.668 7.425 8.215 1.195-5.945 5.79 1.403 8.187L12 18.56l-7.341 3.624 1.403-8.187L.117 9.207l8.215-1.195L12 .587z" />
                        </svg>
                        {item?.rating?.rate}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemsCard;
