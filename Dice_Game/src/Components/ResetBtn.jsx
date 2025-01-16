function ResetBtn({resetScore}) {
    return (
            <div className="px-4 py-2 border-[1px] border-black rounded-md my-2 cursor-pointer">
                    <button className="text-center font-semibold" onClick={resetScore}>Reset Score</button>
            </div>
    )
}

export default ResetBtn
