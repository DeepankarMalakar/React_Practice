function ShowRules() {
    return (
        <div className="flex justify-center items-center">
            <div className="font-semibold border-2 w-[600px] h-[200px] bg-orange-200 mt-3 p-4 rounded-sm">
                <h1 className="text-xl">Rules for playing dice:<span className="ml-[320px] cursor-pointer">❌</span></h1>
                <br />
                <span>1. Select any number</span>
                <br />
                <span>2. Click on dice image</span>
                <br />
                <span>3. After clicking if selected number is equal to the dice number you will get the same point as dice.</span>
                <br />
                <span>4. If you guessed wrong number 2 points will be deducted</span>
            </div>
        </div>
    )
}

export default ShowRules
