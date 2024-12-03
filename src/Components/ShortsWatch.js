import React from 'react'
import { useParams } from 'react-router-dom';

const ShortsWatch = () => {
    const videoId = useParams();
    console.log("videoId", videoId?.shortId);
    const videoSrc = `https://www.youtube.com/embed/${videoId?.shortId}?autoplay=1`;
  return (
    <div>
        <iframe
          width="310"
          height="550"
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='rounded-2xl ml-[48rem]'
        ></iframe>
    </div>
  )
}

export default ShortsWatch
