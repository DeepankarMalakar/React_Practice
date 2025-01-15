import { useState, useEffect } from "react";

const NumberSelector = () => {
    const [selectedNumber, setSelectedNumber] = useState(null);

    useEffect(() => {
        console.log(selectedNumber);
    }, [selectedNumber]);

    const buttons = [];
    for (let i = 1; i <= 6; i++) {
        buttons.push(
            <button
                key={i}
                className="px-4 py-2 border-[1px] font-semibold border-black hover:bg-black hover:text-white"
                onClick={() => setSelectedNumber(i)}
            >
                {i}
            </button>
        );
    }

    return (
        <div className="mx-2 space-x-2">
            {buttons}
            <div className="flex justify-end mt-4">
                <span className="font-semibold">Select number: {selectedNumber}</span>
            </div>
        </div>
    );
};

export default NumberSelector;