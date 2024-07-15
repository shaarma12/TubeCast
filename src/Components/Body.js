import React from 'react'
import Tags from './Tags'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className='bg-[#212121] flex '>
      <Sidebar/>
      <div>
        <Tags />
        <Outlet/>
      </div>
    </div>
  )
}

export default Body
