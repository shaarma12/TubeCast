import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import likes from "../Images/likes.png";
import dots from "../Images/dots.png";
import unlike from "../Images/unlike.png";
import share from "../Images/share.png";
import save from "../Images/save.png";
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
          <img src={ thumbnails?.maxres?.url} className='w-10 h-10 rounded-full mr-3'/>
          <div className='text-white'>
            <p className='text-md font-medium text-white -mt-[0.1rem]'>{channelTitle}</p>
            <p className='text-[#AAAAAA] text-sm -mt-[0.15rem]'>54.9M subscribers</p>
          </div>
          <button className='bg-[#F1F1F1] rounded-full w-[6.5rem] h-9 ml-6 font-medium mt-1 hover:opacity-85'>Subscribe</button>
        </div>
        <div className='flex ml-10 mt-1'>
          <div className='flex items-center mr-2 ml-[4.6rem]'>
          <button className='flex justify-center bg-[#FFFFFF1A] items-center w-[5.5rem] h-9 rounded-tl-3xl rounded-bl-3xl hover:bg-[#ffffff35] border-r-2 border-[#ffffff35] '><img src={likes} className='h-6 mx-1'/><p className='text-white font-semibold'>1.6M</p></button>
            <button className='flex justify-center bg-[#FFFFFF1A] items-center w-14 h-9 rounded-tr-3xl rounded-br-3xl hover:bg-[#ffffff35]'><img src={unlike} className='h-6 mx-1' /></button>
            </div>
            <button className='flex mr-2 bg-[#FFFFFF1A] items-center w-[6rem] h-9 rounded-3xl  hover:bg-[#ffffff35]'><img src={share} className='h-6 mx-1 ml-2'/><p className='text-white font-semibold'>Share</p></button>
            <button className='flex mr-2 bg-[#FFFFFF1A] items-center w-[5.5rem] h-9 rounded-3xl  hover:bg-[#ffffff35]'><img src={save} className='h-6 mx-1 ml-3'/><p className='text-white font-semibold'>Save</p></button>
            <button className='flex justify-center bg-[#FFFFFF1A] items-center w-11 h-9 rounded-full hover:bg-[#ffffff35]'><img src={dots} className='h-6'/></button>
        </div>
      </div>
    </div>
  );
}

export default Watch;
