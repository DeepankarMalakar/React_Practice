function Navbar({searchTerm, onChangeSearch}) {
    return (
    <>
        <div><h1 className="text-3xl text-red-600 ml-4">SHOPILY</h1></div>
        <div>
            <input type="text" value={searchTerm} onChange={(e) => onChangeSearch(e.target.value)} placeholder="Search items..." className="p-2 border border-red-600 bg-white mr-4" />
        </div>
    </>
)
}

export default Navbar
