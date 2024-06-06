import { useState } from "react";

const Sidebar = ({ onSelectPage, selectedPage}) => {
    const [topple, setTopple] = useState(false);
    const [mode, setMode] = useState(false);

  return (
    <div className={`h-full ${topple ? 'w-20' : 'w-60'} bg-gray-800 text-white`}>
      <button onClick={() => setTopple(!topple)}>
        {topple ? 'Expand' : 'Topple'}
      </button>
      <button onClick={() => setMode(!mode)}>
        {mode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <nav>
        <ul>
            <li onClick={() => onSelectPage('Investments')}>Investments</li>
            <li onClick={() => onSelectPage('Settings')}>Settings</li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
