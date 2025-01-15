import NumberSelector from "./NumberSelector"
import DiceCard from "./DiceCard"
import ShowRules from "./ShowRules"
const Gameplay = () => {

    return (
        <>
            <div className="container2 flex justify-between items-center w-[1280px] h-[120px] border-2 mt-8 ml-20 p-4">
                <div className="">
                    <h1 className="text-6xl ml-5 font-semibold">0</h1>
                    <span className="">Total score</span>
                </div>
                <NumberSelector />
            </div>
            <DiceCard />
            <ShowRules />
        </>
    )
}

export default Gameplay
