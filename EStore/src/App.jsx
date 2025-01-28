import { useState } from "react";
import ItemsFetch from "./Components/ItemsFetch";
import Navbar from "./Components/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // State to track search term
  const [categoryFilter, setCategoryFilter] = useState("");    // State for category filter

  // Reset items on home click
  const resetItems = () => {
    setSearchTerm("")
    setCategoryFilter("")
  }

  return (
    <div className="bg-amber-50">
      {/* Pass searchTerm and onSearchChange to Navbar */}
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} setCategoryFilter={setCategoryFilter} onHomeClick={resetItems} />
      
      {/* Pass searchTerm to ItemsFetch for filtering */}
      <ItemsFetch searchTerm={searchTerm} categoryFilter = {categoryFilter}/>
    </div>
  );
}

export default App;
