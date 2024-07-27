import React from 'react'

const Description = ({ data }) => {
    console.log("Description", data);
  return (
    <div className='w-[50rem] bg-[#FFFFFF1A] rounded-xl p-3 mt-4'>
    <p className='text-white'>{data }</p>
    </div>
  )
}

export default Description
