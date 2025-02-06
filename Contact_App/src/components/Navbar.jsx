import firebaseLogo from "../assets/firebase.png"
const Navbar = () => {
    return (
        <div className="h-16 w-80 bg-white border border-white flex justify-center items-center rounded-lg space-x-1">
        <div>
            <img src={firebaseLogo} alt="" className="w-9 h-9" />
        </div>
        <div>
            <h1 className="font-semibold text-[22px] text-green-500"><span className="text-orange-400">Contact</span> App</h1>
        </div>
        </div>
    )
}

export default Navbar
