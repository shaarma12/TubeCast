import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const Watch = () => {
  const data = useSelector(store => store.Data);
  const {description,title,channelTitle,publishedAt,thumbnails } = data?.videoData?.snippet;
  const { viewCount, likeCount, commentCount } = data?.videoData?.statistics;
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className='bg-[#212121] ml-40 mb-40'>
      <iframe
        width="800"
        height="450"
        src={videoSrc}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className='rounded-2xl mt-4 mb-7'
      ></iframe>
      <p className='text-white text-xl font-semibold w-[51rem] -mt-4'>{title}</p>
      <div className='flex mt-2'>
        <div className='flex'>
          {/* channelLogo */}
          <img src={ thumbnails?.maxres?.url} className='w-10 h-10 rounded-full mr-3'/>
          {/* channelName */}
          <div className='text-white'>
            <p className='text-md font-medium text-white -mt-[0.1rem]'>{channelTitle}</p>
            <p className='text-[#AAAAAA] text-sm -mt-[0.15rem]'>54.9M subscribers</p>
          </div>
          {/* Subscribe Button */}
          <button className='bg-[#F1F1F1] rounded-full w-[6.5rem] h-9 ml-5 font-medium mt-1'>Subscribe</button>
        </div>
        <div className='flex'></div>
      </div>
    </div>
  );
}

export default Watch;
