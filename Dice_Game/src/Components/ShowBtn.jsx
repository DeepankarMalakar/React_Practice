import { useState } from "react";
import ShowRules from "./ShowRules";

function ShowBtn() {
    const [isRulesVisible, setIsRulesVisible] = useState(false);

    const toggleRules = () => {
        setIsRulesVisible((prev) => !prev);
    };

    return (
        <div>
            <div className="px-4 py-2 bg-black text-white flex font-semibold rounded-md cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-black hover:font-semibold">
                <button onClick={toggleRules}>
                    Show Rules
                </button>
            </div>
            {isRulesVisible && <ShowRules closeRules={toggleRules} />}
        </div>
    );
}

export default ShowBtn;
