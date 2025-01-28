import { useState } from "react";

function Navbar({ searchTerm, onSearchChange, setCategoryFilter, onHomeClick }) {

    const [isCategoryOpen, setIsCategoryOpen] = useState(false)   // category state

    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen)
    }

    return (
        <nav className="w-full h-20 flex justify-between items-center bg-gray-50 shadow-md">
            {/* Logo Section */}
            <div className="w-48 p-2">
                <h1 className="font-bold text-4xl ml-3">
                    <span className="text-red-600">E</span>Store
                </h1>
            </div>

            {/* Navigation Links */}
            <div>
                <ul className="flex space-x-5 font-semibold">
                    <li className="text-red-600 cursor-pointer hover:text-black" onClick={onHomeClick}>Home</li>
                    <li className="cursor-pointer hover:text-red-600">My Cart</li>
                    <li className="relative">
                        <span
                            className="text-red-600 cursor-pointer hover:text-black"
                            onClick={toggleCategory}
                        >
                            Category
                        </span>
                        {isCategoryOpen && (
                            <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 space-y-2 w-48">
                                <li className="cursor-pointer hover:text-red-600" onClick={() => setCategoryFilter("men's clothing")}>
                                    Men's Clothing
                                </li>
                                <li className="cursor-pointer hover:text-red-600" onClick={() => setCategoryFilter("women's clothing")}>
                                    Women's Clothing
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="cursor-pointer hover:text-red-600" onClick={() => setCategoryFilter("jewelery")}>
                        Jewelery
                    </li>
                    <li className="text-red-600 cursor-pointer hover:text-black" onClick={() => setCategoryFilter("electronics")}>Electronics</li>
                </ul>
            </div>

            {/* Search Bar */}
            <div className="mr-6 w-80">
                <input
                    type="text"
                    value={searchTerm} // Controlled input
                    onChange={(e) => onSearchChange(e.target.value)} // Trigger parent callback
                    placeholder="Search items..."
                    className="p-2 w-full rounded-lg outline-0 bg-white text-red-600 shadow-md focus:border focus:ring-1 focus:ring-red-600"
                />
            </div>
        </nav>
    );
}

export default Navbar;
