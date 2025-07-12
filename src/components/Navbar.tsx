import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#f8f8f8] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex space-x-8">
            {/* Navigation Links */}
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 text-base font-semibold transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'text-black border-b-2 border-black' 
                  : 'text-gray-600 hover:text-black hover:border-b-2 hover:border-black'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`inline-flex items-center px-1 pt-1 text-base font-semibold transition-all duration-300 ${
                location.pathname === '/about'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black hover:border-b-2 hover:border-black'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/projects"
              className={`inline-flex items-center px-1 pt-1 text-base font-semibold transition-all duration-300 ${
                location.pathname === '/projects'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black hover:border-b-2 hover:border-black'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/leaderboard"
              className={`inline-flex items-center px-1 pt-1 text-base font-semibold transition-all duration-300 ${
                location.pathname === '/leaderboard'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black hover:border-b-2 hover:border-black'
              }`}
            >
              Leader Board
            </Link>
            <Link
              to="/contact"
              className={`inline-flex items-center px-1 pt-1 text-base font-semibold transition-all duration-300 ${
                location.pathname === '/contact'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black hover:border-b-2 hover:border-black'
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-1.5 text-sm font-medium text-white bg-[#0b3562] rounded-md hover:bg-[#0b3562]/90 transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-1.5 text-sm font-medium text-white bg-[#0b3562] rounded-md hover:bg-[#0b3562]/90 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};