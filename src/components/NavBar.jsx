import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import magicLogo from '../assets/Magiclogo.png'
import { useState } from 'react'
const NavBar = () => {
  return (
    <nav>
      <div className="mx-5 mt-5 sm:rounded-lg rounded-t-lg sticky top-0 z-50 py-3 backdrop-blur-lg border border-neutral-700/80 bg-gradient-to-l from-zinc-700 to-zinc-800">
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
      <div className="mx-5 rounded-lg sticky top-0 z-50">
      <div className="container px-4 mx-auto relative text-sm bg-zinc-500 rounded-b-md " >
        <div className="flex justify-center items-center ">

          <a href="" className=' px-2 text-md font-bold md:text-lg text-white'>1 of 1's</a>
          <a href="" className=' px-2 text-md font-bold md:text-lg text-white'>Latest Drop</a>
          <a href="" className=' px-2 text-md font-bold md:text-lg text-white'>Vision </a>
        </div>
      </div>
      

      </div>
     
    </nav>
  )
}

export default NavBar