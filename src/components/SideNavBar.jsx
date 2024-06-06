
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaCog, FaSun, FaMoon } from "react-icons/fa";

const SideNavBar = ({ darkMode, setDarkMode, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full ${isSidebarOpen ? 'w-64' : 'w-16'} bg-white dark:bg-darkGray transition-all duration-400`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          {isSidebarOpen && <div className="text-lg font-semibold">Future Invest</div>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl focus:outline-none">
            <FaBars />
          </button>
        </div>
        <nav className="flex-grow">
          <Link to="/investments" className="flex items-center py-2.5 px-4 hover:bg-gray-700">
            <FaHome className="mr-2" />
            {isSidebarOpen && 'Investments'}
          </Link>
          <Link to="/settings" className="flex items-center py-2.5 px-4 hover:bg-gray-700">
            <FaCog className="mr-2" />
            {isSidebarOpen && 'Settings'}
          </Link>
        </nav>
        <div className="mt-auto p-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center space-x-2 text-lg focus:outline-none"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            {isSidebarOpen && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
