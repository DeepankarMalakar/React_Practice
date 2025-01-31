import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="w-screen flex items-center justify-between h-20">
                {/* Logo */}
                <div className="ml-8 text-white w-20 h-10 border border-orange-500 rounded-tr-lg rounded-bl-lg text-center hover:bg-orange-500 cursor-pointer">
                    <NavLink to="/"><h1 className="text-2xl text-orange-500 font-extr<NavLinkght hover:text-white transition duration-300 ease-in-out">
                        DM
                    </h1></NavLink>
                </div>

                <div>
                    <ul className="flex space-x-12 mr-8 text-white">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
