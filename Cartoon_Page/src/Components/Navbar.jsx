function Navbar() {
    return (
        <nav>
            <div className="w-full h-16 flex justify-between items-center bg-blue-500 px-4 lg:flex-row flex-col sticky top-0 z-10">
                <div className="w-28">
                    <span className="text-4xl text-white ml-2 font-semibold">Toons</span>
                </div>
                <div className="lg:flex-grow flex justify-center">
                    <ul className="flex space-x-8 text-[18px] cursor-pointer text-white">
                        <li className="hover:font-bold">Home</li>
                        <li className="hover:font-bold">Top Rated</li>
                        <li className="hover:font-bold">Contact Us</li>
                    </ul>
                </div>
                <div className="bg-white w-60 mt-4 lg:mt-0 rounded-md">
                    <input
                        type="text"
                        placeholder="Search Cartoons"
                        className="w-full p-2 rounded-md outline-1"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
