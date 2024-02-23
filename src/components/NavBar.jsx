import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
         <div className='flex justify-center'>
          <div className='flex w-[90vw] md:w-[60vw] xl:w-[35vw] border-2 border-[#606060] rounded-3xl flex-row justify-around justify-items-center text-[#111111] p-3 shadow-inner mt-7'>
            <NavLink to='/'><button className='hover:text-[#000000f2] hover:scale-[120%] hover:font-medium focus:font-medium focus:text-black focus:scale-[120%]'>Alarm</button></NavLink>
            <NavLink to='/worldclock'><button className='hover:text-[#000000f2] hover:scale-[120%] hover:font-medium focus:font-medium focus:text-black focus:scale-[120%]'>World clock</button></NavLink>
            <NavLink to='/stopwatch'><button className='hover:text-[#000000f2] hover:scale-[120%] hover:font-medium focus:font-medium focus:text-black focus:scale-[120%]'>Stopwatch</button></NavLink>
          </div>
        </div>
    </div>
  )
}

export default NavBar