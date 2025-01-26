function Card({ cartoon }) {
    const placeHolderImg = "https://img.freepik.com/free-vector/cute-elephant-cool-wearing-glasses-cartoon-vector-icon-illustration-animal-nature-icon-isolated_138676-13787.jpg?semt=ais_hybrid";

    return (
        <div className="w-60 h-full flex flex-col">
            <img
                src={cartoon.image || placeHolderImg} // Use placeholder if no image
                alt={cartoon.title}
                onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = placeHolderImg; // Set fallback image
                }}
                className="w-full h-52  rounded-t-md"
            />
            <div className="flex flex-col border border-gray-200 border-t-0 p-4 pt-2 bg-white rounded-b-lg font-bold">
            <span className="text-[20px] font-bold">{cartoon.title}{"(" + cartoon.year + ")"}</span>
            <span className="text-green-600 font-semibold">{cartoon.genre.join(" , ")}</span>
            <span className="text-[12px] text-amber-600">Episodes: {cartoon.episodes}</span>
            <span className="text-[12px] text-red-600">Runtime: {cartoon.runtime_in_minutes} mins</span>
            <span className="text-[15px]">{cartoon.creator.join(" | ")}</span>
            </div>
        </div>
    );
}

export default Card;
