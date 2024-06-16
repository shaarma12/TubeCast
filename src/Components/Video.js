import React from 'react'

const Video = ({data}) => {
  return (
    <div className='border-2 border-red-700 w-80 h-56'>
      <img src={data?.snippet?.thumbnails?.standard?.url} alt='videoImage'/>
    </div>
  )
}

export default Video
