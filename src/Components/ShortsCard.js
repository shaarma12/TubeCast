import React from 'react'

const ShortsCard = ({info}) => {
  return (
    <div className='w-[8rem] h-[15rem] rounded-lg'>
      <img src={info} alt='ShortsVideo' className='w-full h-full object-cover rounded-md'/>
    </div>
  )
}

export default ShortsCard
