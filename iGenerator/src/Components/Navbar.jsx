const Navbar = () => {
  return (
    <nav className="bg-white w-screen h-16 flex flex-wrap items-center px-4 shadow-sm justify-between sm:h-20">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-blue-600 text-2xl font-semibold">iGenerator</span>
      </div>

      {/* Tagline */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start mt-2 sm:mt-0">
        <p className="text-black text-md font-medium flex items-center">
          <span className="mr-2">📄</span> Generate invoices easily
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
