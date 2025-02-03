import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <header className="w-full">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default App;
