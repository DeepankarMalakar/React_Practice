import { useParams, NavLink } from "react-router-dom";

const Profile = () => {
    const { username } = useParams();

    return (
        <div className="text-center mt-10">
            <h1 className="text-green-500">
                <span className="text-orange-600 font-semibold">
                    Welcome, {username} -
                </span>{" "}
                <NavLink
                    to="/home"
                    className="text-green-500 underline hover:text-green-700"
                >
                    Explore more
                </NavLink>
            </h1>
        </div>
    );
};

export default Profile;
