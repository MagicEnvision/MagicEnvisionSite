import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import magicLogo from '../assets/Magiclogo.png'
import { useState } from 'react'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav>
      <div className="mx-5 sm:rounded-lg rounded-t-lg sticky top-0 z-50 py-3 
      backdrop-blur-lg border border-neutral-700/80 bg-gradient-to-l 
      from-zinc-700 to-zinc-800" onMouseEnter={()=>{setIsOpen(true)}} onMouseLeave={()=>{setIsOpen(false)}}>
        <div className="container px-4 mx-auto relative text-sm ">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center ">
              <button>
                <img src={magicLogo} alt="MagicLogo" className='max-w-full h-12' />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className='text-white mr-5'><ChevronLeft size={40} /></button>
              <button className='text-white'><ChevronRight size={40} /></button>
            </div>
          </div>
        </div>
       
      </div>
      <div 
      onMouseEnter={()=>{setIsOpen(true)}} onMouseLeave={()=>{setIsOpen(false)}}
      className={`  mx-5 rounded-lg sticky top-0 z-50 transition-all duration-200 ease-in-out transform ${
        isOpen ?  'opacity-100' : 'opacity-0'
      }  kanit-semibold`}  >
        <div className="container px-4 mx-auto relative text- bg-gradient-to-r from-zinc-500 via-zinc-700 to-zinc-500 rounded-b-md">
          <div className="flex justify-center items-center">
            <a href="" className="px-10 text-md md:text-lg text-white">1 of 1's</a>
            <a href="" className="px-10 text-md md:text-lg text-white">Latest Drop</a>
            <a href="" className="px-10 text-md md:text-lg text-white">Vision</a>
          </div>
        </div>
      </div>
     
    </nav>
  )
}

export default NavBar