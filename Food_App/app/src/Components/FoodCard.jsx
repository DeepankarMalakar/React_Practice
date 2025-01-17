import BoiledEgg from "../assets/boiled_eggs.png";
import Ramen from "../assets/ramen.png";
import GrilledChicken from "../assets/grillChicken.png";
import Cake from "../assets/cake.png";
import Burger from "../assets/burger.png";
import Pancake from "../assets/pancake.png";
function FoodCard({ foodData }) {
    const imageMap = {
        "BOILED EGG": BoiledEgg,
        "RAMEN": Ramen,
        "GRILLED CHICKEN": GrilledChicken,
        "CAKE": Cake,
        "BURGER": Burger,
        "PANCAKE": Pancake
    };

    // Select image based on foodData.name
    const imageUrl = imageMap[foodData?.name] || BoiledEgg; // Default to Boiled Egg if no match

    return (
        <div className="card-container w-[400px] h-[280px] border-[1px] rounded-md p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-opacity-80">
            <div className="card text-md font-semibold text-white flex flex-col space-y-1">
                <div className="flex justify-between items-center">
                    <img src={imageUrl} alt="logo" className="w-36 h-32 rounded-md object-cover mt-2" />
                    <h2 className="text-2xl text-yellow-400 font-semibold">{foodData?.name}</h2>
                </div>
                <span className="text-md">{foodData?.text}</span>
                <span className="text-yellow-200">{foodData?.type}</span>
                <div className="mt-2 flex items-end justify-end cursor-pointer">
                    <button className="border-[1px] border-red-600 px-4 py-2 bg-red-700 rounded-md hover:bg-red-500">${foodData?.price}</button>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
