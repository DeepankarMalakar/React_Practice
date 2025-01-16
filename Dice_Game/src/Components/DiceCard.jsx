import ResetBtn from "./ResetBtn"
import ShowBtn from "./ShowBtn"
function DiceCard({currentDice, roleDice, resetScore}) {

    // const [currentDice, setCurrentDice] = useState(1) -> taking this to parent component

    // const generateRandomNumber = (min, max) => {
    //     return (Math.floor(Math.random() * (max-min) + min))
    // }

    // const roleDice = () => {
    //     const randomPics = generateRandomNumber(1, 7)

    //     setCurrentDice(randomPics)
    // }

    return (
        <div className="container3 flex justify-center items-center">
            <div className="card h-[300px] rounded-md p-2 mt-6">
                <div className="w-40" onClick={roleDice}>
                    <img src={`./src/Game Page/dice_${currentDice}.png`} alt="dice" />
                </div>
                <div className="mt-2 flex items-center">
                    <span className="font-semibold text-l">Click on the dice to roll</span>
                </div>
                {/* <div className="px-4 py-2 border-[1px] border-black rounded-md my-2 cursor-pointer">
                    <button className="text-center font-semibold">Reset Score</button>
                </div> */}
                {/* <div className="px-4 py-2 bg-black text-white flex rounded-md cursor-pointer">
                    <button>Show Rules</button>
                </div> */}
                <ShowBtn />
                <ResetBtn resetScore = {resetScore}/>
            </div>
        </div>
    )
}

export default DiceCard
