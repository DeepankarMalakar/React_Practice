const Model = ({ isOpen, setIsOpen }) => {
    return (
        <div
            className={`fixed inset-0 flex justify-center items-center transition-all duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
        >
            {/* Blurred Background */}
            <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm"></div>

            {/* Modal Content */}
            <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] sm:w-[400px] relative z-10">
                <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ✖
                </button>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-400 rounded-md w-full py-2 px-3 focus:outline-orange-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-400 rounded-md w-full py-2 px-3 focus:outline-orange-500"
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
                    >
                        Save Contact
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Model;
