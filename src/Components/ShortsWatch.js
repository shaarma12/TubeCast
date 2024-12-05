import React from 'react'
import { useParams } from 'react-router-dom';

const ShortsWatch = () => {
    const videoId = useParams();
    console.log("videoId", videoId?.shortId);
    const videoSrc = `https://www.youtube.com/embed/${videoId?.shortId}?autoplay=1`;
  return (
    <div className='h-[40rem] flex justify-center items-center'>
      <div className='w-[21.5rem] h-[38rem] overflow-hidden rounded-2xl ml-[45.8rem] -mt-6'>
        <iframe
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='h-full w-full'
        ></iframe>
        </div>
    </div>
  )
}

export default ShortsWatch
