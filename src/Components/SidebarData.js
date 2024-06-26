import React from 'react'

const SidebarData = ({data}) => {
  return (
    <div className='flex text-white w-56  ml-5 p-2 rounded-lg'>
          <img src={data?.icon} alt="Home" className='pr-6 w-[3.2rem]'/>
          <p className='text-lg font-semibold'>{data?.name}</p>
    </div>
  )
}

export default SidebarData
