import Navbar from "../Components/Navbar"
import ProductFetch from "../Components/ProductFetch"

function App() {
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center h-16">
        <Navbar />
      </div>
      <div>
        <ProductFetch />
      </div>
    </div>
  )
}

export default App
