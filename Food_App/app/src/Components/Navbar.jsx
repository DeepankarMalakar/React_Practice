function Navbar() {
    return (
        <div className="w-full h-24 bg-zinc-950 flex justify-between items-center text-white">
            <div className="border-[1px] ml-4 rounded-md" id="logo-name">
                <h2 className="text-red-700 text-3xl p-2 cursor-pointer">Food <span className="text-white">Zone</span></h2>
            </div>
            <div id="list-nav">
                <ul className="flex items-center space-x-5 text-md p-2">
                    <li className="border-[1px] px-3 py-2 bg-red-600 rounded-md border-none cursor-pointer">All</li>
                    <li className="border-[2px] px-3 py-2 bg-red-600 rounded-md border-none cursor-pointer">Breakfast</li>
                    <li className="border-[2px] px-3 py-2 bg-red-600 rounded-md border-none cursor-pointer">Lunch</li>
                    <li className="border-[2px] px-3 py-2 bg-red-600 rounded-md border-none cursor-pointer">Dinner</li>
                </ul>
            </div>
            <div id="nav-search" className="mr-6">
                <input type="text" placeholder="Search item..." className="py-1 px-4 border-red-600 border-[2px] rounded-md text-black" />
            </div>
        </div>
    )
}

export default Navbar