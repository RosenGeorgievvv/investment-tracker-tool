import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SideNavBar from './components/SideNavBar';
import Investments from './pages/Investments';
import Settings from './pages/Settings';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-darkGray text-white' : 'bg-white text-black'}`}>
      <Router>
        <SideNavBar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
        />
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'} p-4`}>
          <Routes>
            <Route path="/investments" element={<Investments />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
