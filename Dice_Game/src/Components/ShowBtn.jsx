import { useState } from "react";
import ShowRules from "./ShowRules";

function ShowBtn() {
    const [isRulesVisible, setIsRulesVisible] = useState(false);

    const toggleRules = () => {
        setIsRulesVisible((prev) => !prev);
    };

    return (
        <div>
            <div className="px-4 py-2 bg-black text-white flex rounded-md cursor-pointer">
                <button onClick={toggleRules}>
                    {isRulesVisible ? "Hide Rules" : "Show Rules"}
                </button>
            </div>
            {isRulesVisible && <ShowRules closeRules={toggleRules} />}
        </div>
    );
}

export default ShowBtn;
