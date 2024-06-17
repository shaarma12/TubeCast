import React from 'react'

const Video = ({ data }) => {
  const formatViewCount = (viewcount) => {
    if (viewcount >= 1000000)
    {
      return (viewcount / 1000000).toFixed(1) + 'M';
    }
    else if (viewcount >= 1000)
    {
      return (viewcount / 1000).toFixed(2) + 'K';  
    }
    else {
      return viewcount;
    }
  }
  return (
    <div className='w-[22rem] h-[22rem]'>
      <img src={data?.snippet?.thumbnails?.maxres?.url} alt='videoImage' className='rounded-lg w-[50rem] h-56' />
      <div className='flex mt-3'>
        <img />
        <div className='ml-14'>
          <p className='text-white w-[15.5rem]'>{data?.snippet?.localized?.title}</p>
          <p className='text-[#AAAAAA]'>{data?.snippet?.channelTitle}</p>
          <div className='text-[#AAAAAA]'>
            <p>{ formatViewCount(data?.statistics?.viewCount)} Views</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
