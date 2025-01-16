import NumberSelector from "./NumberSelector";
import DiceCard from "./DiceCard";
// import ShowRules from "./ShowRules";
import { useState } from "react";

const Gameplay = () => {
    const [selectedNumber, setSelectedNumber] = useState(undefined);
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    // const [error, setError] = useState("");

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min); // Ensure correct random range
    };

    const roleDice = () => {
        // if (!selectedNumber) {  // Check if a number is selected
        //     setError("Please select a number first!");
        //     return;
        // }

        // setError(""); // Clear error message if a number is selected

        const randomPics = generateRandomNumber(1, 6); // Generate random number between 1 and 6

        setCurrentDice(randomPics);

        setScore((prev) => {
            const newScore =
                selectedNumber === randomPics
                    ? prev + randomPics // If correct guess, add dice value
                    : Math.max(prev - 2, -6); // If wrong guess, deduct 2 but don't go below -6
            return newScore;
        });

        setSelectedNumber(undefined); // Reset selected number after each roll
    };

    const resetScore = () => {
        setScore(0)
    }

    return (
        <>
            <div className="container2 flex justify-between items-center w-[1280px] h-[120px] border-2 mt-8 ml-20 p-4">
                <div className="">
                    <h1 className="text-6xl ml-5 font-semibold">{score}</h1>
                    <span>Total score</span>
                </div>
                <NumberSelector
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                    // error={error}
                />
            </div>
            <DiceCard currentDice={currentDice} roleDice={roleDice} resetScore={resetScore} />
            {/* <ShowRules /> */}
        </>
    );
};

export default Gameplay;
