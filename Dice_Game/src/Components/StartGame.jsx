const StartGame = ({toggle}) => {
    return (
        <>
            <div className="w-full h-[800px] border-2 overflow-hidden flex justify-center items-center" id="container">
                <div className="w-[1182px] h-[522px] bg-white border flex justify-center items-center rounded-md">
                    <div id="left-side" className="w-[500px] h-[400px]">
                        <img src="./src/Game Page/dices 1.png" alt="" />
                    </div>
                    <div id="right-side" className="w-[500px] h-[180px] p-2">
                        <div>
                            <h1 id="heading" className="text-7xl font-semibold flex justify-end">DICE GAME</h1>
                        </div>
                        <div className="flex justify-end mt-4 cursor-pointer">
                            <button className="py-2 px-10 text-white bg-black rounded-sm" id="playNowBtn" onClick={toggle}>Play Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartGame