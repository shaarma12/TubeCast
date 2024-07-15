import React from 'react'
import Tags from './Tags'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Body = () => {
  const tagToggle = useSelector((store) => store.Toggle.tag);
  return (
    <div className='bg-[#212121] flex '>
      <Sidebar/>
      <div>
        {tagToggle&&<Tags />}
        <Outlet/>
      </div>
    </div>
  )
}

export default Body
