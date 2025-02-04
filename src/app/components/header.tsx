const Header: React.FC = () => {
    return (
      <header className="bg-white fixed top-0 w-full shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-natureGreen">Nature Beauty</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#hero" className="text-gray-700 hover:text-skyBlue">Home</a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-skyBlue">About</a>
            </li>
            <li>
              <a href="#features" className="text-gray-700 hover:text-skyBlue">Features</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-skyBlue">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  