import {Link} from 'react-router-dom'
import Search from './Search'
const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to= "/">
                    <h1 className='text-4xl font-bold bg-blue-500 py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>GS2.0 <span className='text-2xl'>🔎</span></h1>
                </Link>
                <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white  border rounded-full px-2 py-1 hover:shadow-lg'>
                    {darkTheme ? "Light☀️" : "Dark🌙"}
                </button>
            </div>
            <Search />
        </div>
    )
}

export default Navbar
