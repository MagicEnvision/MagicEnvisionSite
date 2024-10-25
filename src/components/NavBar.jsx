import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import magicLogo from '../assets/Magiclogo.png'
const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-gradient-to-l from-zinc-700 to-zinc-800">
       <div className="container px-4 mx-auto relative text-sm ">
       <div className="flex justify-between items-center">
    
        <div className="flex justify-center items-center ">
          <button>
          <img src={magicLogo} alt="MagicLogo" className='max-w-full h-20'/>
          </button>
        
        </div>
      
        <div className="flex justify-center items-center">
         <button className='text-white mr-5'><ChevronLeft size={40}/></button>
         <button className='text-white'><ChevronRight size={40}/></button>
        </div>
        
       </div>
       </div>
    </nav>
  )
}

export default NavBar