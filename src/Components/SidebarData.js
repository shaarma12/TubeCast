import React from 'react'
import Home from "../Images/Home.png"
const SidebarData = () => {
  return (
    <div className='flex text-white w-56 border-2 border-red-600 ml-5 p-2 rounded-lg'>
          <img src={Home} alt="Home" className='pr-6'/>
          <p className='text-lg font-semibold'>Home</p>
    </div>
  )
}

export default SidebarData
