import React from 'react'

const SmallTag = ({data}) => {
  return (
    <div className='bg-[#FFFFFF1A] px-4 mr-3 rounded-md py-[0.25rem] h-9 font-semibold text-[#F1F1F1] hover:cursor-pointer'>
      <p>{data}</p> 
    </div>
  )
}

export default SmallTag
