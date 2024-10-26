import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-neutral-200 h-full pt-4'>
      <NavBar/>
      

    </div>
  )
}

export default App
