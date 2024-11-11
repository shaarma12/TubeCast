import React from 'react'
import ShortsCard from './ShortsCard'

const Shorts = () => {
  return (
    <div className='flex overflow-x-scroll space-x-4 p-2'>
      <ShortsCard />
      <ShortsCard />
      <ShortsCard />
      <ShortsCard />
    </div>
  )
}

export default Shorts
