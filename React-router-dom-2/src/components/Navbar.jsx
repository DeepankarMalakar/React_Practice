import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="w-screen flex items-center justify-between h-20">
                {/* Logo */}
                <div className="ml-8 text-white w-20 h-10 rounded-tr-lg rounded-bl-lg text-center hover:bg-orange-500 cursor-pointer">
                    <NavLink to="home">
                        <h1 className="text-4xl text-orange-500 hover:text-white transition duration-300 ease-in-out">
                            DM
                        </h1>
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <div>
                    <ul className="flex space-x-12 mr-8 text-white">
                        <NavLink
                            to="home"
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 font-bold" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="about"
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 font-bold" : ""
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="contact"
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 font-bold" : ""
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="profile/john_doe" // Default username
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 font-bold" : ""
                            }
                        >
                            Profile
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
