import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const [selectedPage, setSelectedPage] = useState('Investments');

  return (
    <>
      <Sidebar onSelectPage={setSelectedPage} selectedPage={selectedPage} />
      <div className='flex-grow p-4'>
        
      </div>
    </>
  )
}

export default App
