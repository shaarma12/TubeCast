import React from 'react'
import Tags from './Tags'
import VideoContainer from './VideoContainer'
import Sidebar from './Sidebar'
const Body = () => {
  return (
    <div className='bg-[#212121] flex '>
      <Sidebar/>
      <div>
        <Tags />
        <VideoContainer />
      </div>
    </div>
  )
}

export default Body
