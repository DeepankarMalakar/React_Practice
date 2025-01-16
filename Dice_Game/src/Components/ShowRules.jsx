import { useState } from "react";

function ShowRules() {
    const [isClose, setIsClose] = useState(true);

    return isClose ? (
        <div className="flex justify-center items-center">
            <div className="font-semibold border-2 w-[600px] h-[200px] bg-orange-200 mt-3 p-4 rounded-sm relative">
                <h1 className="text-xl flex justify-between">
                    Rules for playing dice:
                    <span
                        className="cursor-pointer text-red-600"
                        onClick={() => setIsClose(false)}
                    >
                        ❌
                    </span>
                </h1>
                <br />
                <span>1. Select any number</span>
                <br />
                <span>2. Click on dice image</span>
                <br />
                <span>3. After clicking, if the selected number is equal to the dice number, you will get the same point as the dice.</span>
                <br />
                <span>4. If you guessed the wrong number, 2 points will be deducted.</span>
            </div>
        </div>
    ) : null; // Hide component when `isClose` is false
}

export default ShowRules;
