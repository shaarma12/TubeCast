import React from 'react'

const Video = ({data}) => {
  return (
    <div className='border-2 border-red-600 w-96'>
      <img src={data?.snippet?.thumbnails?.standard?.url} alt='videoImage' className='rounded-lg w-[30rem]'/>
    </div>
  )
}

export default Video
