import { useParams } from "react-router-dom";
const Profile = () => {
    const {username} = useParams();
    return (
        <div className="flex flex-col items-center justify-center text-white mt-10">
            {/* Profile Card */}
            <div className="bg-transparent border border-white shadow-lg p-6 rounded-2xl w-96 text-center">
                {/* Avatar */}
                <img
                    src={`https://ui-avatars.com/api/?name=${username}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-orange-500"
                />

                {/* User Name */}
                <h1 className="text-2xl font-semibold text-orange-500">{username}</h1>

                {/* User Bio */}
                <p className="text-sm text-gray-400 my-2">
                    Frontend Developer | Tech Enthusiast | Lifelong Learner
                </p>

                {/* User Details */}
                <div className="mt-4 space-y-2 text-sm">
                    <p>
                        <span className="font-semibold text-gray-300">Email:</span>{" "}
                        {username.toLowerCase()}@gmail.com
                    </p>
                    <p>
                        <span className="font-semibold text-gray-300">Location:</span> New York, USA
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-center space-x-4">
                    <button className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600">
                        Edit Profile
                    </button>
                    <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
