import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [username] = useState("Deepankar Malakar"); // Replace with a dynamic username from context or props

    return (
        <div className="flex items-center w-screen h-18 border bg-gray-700">
            <nav className="flex space-x-8 list-none text-white ml-5">
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        isActive ? "text-blue-400 font-bold" : "text-white"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-blue-400 font-bold" : "text-white"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "text-blue-400 font-bold" : "text-white"
                    }
                >
                    Contact Us
                </NavLink>
                <NavLink
                    to={`/user/${username}`}
                    className={({ isActive }) =>
                        isActive ? "text-blue-400 font-bold" : "text-white"
                    }
                >
                    Profile
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
