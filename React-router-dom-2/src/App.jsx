import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <>
      <div className="w-screen h-screen bg-slate-950">
      <Navbar />
      <Outlet />
    </div>
    </>
  )
}

export default App
