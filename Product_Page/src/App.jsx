import { useState } from "react"
import Navbar from "../Components/Navbar"
import ProductFetch from "../Components/ProductFetch"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center h-16">
        <Navbar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      </div>
      <div>
        <ProductFetch searchTerm={searchTerm} />
      </div>
    </div>
  )
}

export default App
