import React from 'react'
import ShortsCard from './ShortsCard'

const Shorts = () => {
  return (
    <div>
    <div className='flex absolute overflow-x-scroll space-x-4 p-2 border-2 border-orange-500'>
      <ShortsCard />
      <ShortsCard />
      <ShortsCard />
      <ShortsCard />
      <ShortsCard />
      <ShortsCard />
      <ShortsCard />
      <ShortsCard />
      </div>
      </div>
  )
}

export default Shorts
