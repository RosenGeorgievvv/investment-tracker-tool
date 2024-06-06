import { useState } from "react";

const Sidebar = ({onSelectPage, selectedPage}) => {
    const [topple, setTopple] = useState(false);
    const [mode, setMode] = useState(false);

  return (
    <div>
      <button onClick={() => setTopple(!topple)}>
        {topple ? 'Expand' : 'Topple'}
      </button>
      <button onClick={() => setMode(!mode)}>
        {mode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <nav>
        <ul>
            <li>Investments</li>
            <li>Settings</li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
