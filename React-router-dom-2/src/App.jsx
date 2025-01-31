import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[url(https://img.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg?t=st=1738330352~exp=1738333952~hmac=cfb4827d85d15d654c8c42872eb0f48cf83167bdb3d906d25f8b66f449d089a4&w=1060)] overflow-hidden">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
