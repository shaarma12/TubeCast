import React from 'react'
import Sidebar from './Sidebar'
import Tags from './Tags'
import VideoContainer from './VideoContainer'

const Body = () => {
  return (
      <div className='bg-[#212121] flex'>
          <div className='border-red-600'>
              <Sidebar />
          </div>
          <div className='border-yellow-500'>
          <Tags />
              <VideoContainer />
              </div>
    </div>
  )
}

export default Body
