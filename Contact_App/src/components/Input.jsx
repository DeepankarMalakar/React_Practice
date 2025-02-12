import plusLogo from "../assets/plus (1).png";

const Input = ({ onOpen, onSearch }) => {
    return (
        <div className="bg-white mt-5 flex justify-between items-center p-4 gap-2 rounded-lg">
            <input
                type="text"
                placeholder="🔎 Search Contact..."
                className="border border-gray-400 rounded-md w-full py-2 px-2 font-bold outline-1 focus:outline-2 focus:outline-orange-500"
                onChange={(e) => onSearch(e.target.value)}
            />
            <img
                src={plusLogo}
                alt="Add Contact"
                className="cursor-pointer w-[40px] hover:scale-110 transition-transform duration-200"
                onClick={onOpen} // Trigger modal opening
            />
        </div>
    );
};

export default Input;
