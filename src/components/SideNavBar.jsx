import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaCog, FaSun, FaMoon } from "react-icons/fa";

const SideNavBar = ({ darkMode, setDarkMode, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full ${isSidebarOpen ? 'w-64' : 'w-16'} bg-lightSidebar dark:bg-darkGray transition-all duration-300 shadow-lg`}>
      <div className="flex flex-col h-full p-2">
        <div className="flex items-center justify-between mb-4 p-1.5 rounded bg-white dark:bg-darkerGray shadow">
          {isSidebarOpen && <div className="text-lg font-semibold text-darkGray dark:text-white">Investment Tracker</div>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-darkGray dark:text-white focus:outline-none">
            <FaBars className={isSidebarOpen ? "text-2xl" : "text-4xl"} />
          </button>
        </div>
        <nav className="flex-grow">
          <Link to="/dashboard" className="flex items-center py-2.5 px-4 my-1 rounded hover:bg-sidebarHover dark:hover:bg-gray-700 transition-colors duration-200 text-white">
            <FaHome className={`${isSidebarOpen ? "text-2xl" : "text-3xl"}`} />
            {isSidebarOpen && <span className="ml-3">Investments</span>}
          </Link>
          <Link to="/settings" className="flex items-center py-2.5 px-4 my-1 rounded hover:bg-sidebarHover dark:hover:bg-gray-700 transition-colors duration-200 text-white">
            <FaCog className={`${isSidebarOpen ? "text-2xl" : "text-3xl"}`} />
            {isSidebarOpen && <span className="ml-3">Settings</span>}
          </Link>
        </nav>
        <div className="mt-auto p-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center space-x-2 text-lg focus:outline-none text-white"
          >
            {darkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
            {isSidebarOpen && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
