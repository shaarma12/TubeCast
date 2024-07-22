import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className='bg-[#212121]'>
      <iframe
        width="800"
        height="450"
        src={videoSrc}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className='ml-40 rounded-2xl mt-4 mb-7'
      ></iframe>
    </div>
  );
}

export default Watch;
