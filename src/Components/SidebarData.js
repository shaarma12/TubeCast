import React, { useState } from 'react'

const SidebarData = ({ data }) => {
  const [isActive, setIsactive] = useState(false);
  return (
    <div className={`flex text-white w-56 ml-5 p-2 rounded-lg ${isActive?'bg-[#393939] cursor-pointer':''} hover:bg-[#393939] hover:cursor-pointer`} onClick={()=>{
      setIsactive(isActive);
    }}>
          <img src={data?.icon} alt="Home" className='pr-6 w-[3.2rem]'/>
          <p className='text-lg font-semibold'>{data?.name}</p>
    </div>
  )
}

export default SidebarData
