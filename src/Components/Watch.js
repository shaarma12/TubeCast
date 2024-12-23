import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import likes from "../Images/likes.png";
import dots from "../Images/dots.png";
import unlike from "../Images/unlike.png";
import share from "../Images/share.png";
import save from "../Images/save.png";
import sorting from "../Images/sorting.png";
import Description from './Description';
import useSubscriber from '../utils/useSubscriber';
import useChannelDP from '../utils/useChannelDP';
import Comments from './Comments';
import useComment from '../utils/useComment';
import Shorts from './Shorts';
import { toogleState } from '../utils/toggleSlice';

const Watch = () => {
  const [Isshorts, setIsShorts] = useState(0);
  const [sortBy, setSortBy] = useState(false);
  const [sortData, setSortData] = useState(false);
  const data = useSelector(store => store.Data);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const { subscribe } = useSubscriber(data?.videoData?.snippet?.channelId);
  const { dp } = useChannelDP(data?.videoData?.snippet?.channelId);
  const { comm } = useComment(videoId);
  const sortRef = useRef();
  const dropdownRef = useRef();
  const flag = useSelector((store) => store.Toggle?.flag);
  const dispatch = useDispatch();

  const formatLikeCount = (likecount) => {
    if (likecount >= 1000000) {
      return Math.floor((likecount / 1000000)) + 'M';
    } else if (likecount >= 1000) {
      return Math.floor((likecount / 1000)) + 'K';
    } else {
      return likecount;
    }
  };

  const formatCommentCount = (comment) => {
    if (comment >= 1000000) {
      return ((comment / 1000000)).toFixed(2) + 'M';
    } else if (comment >= 1000) {
      return ((comment / 1000)).toFixed(2) + 'K';
    } else {
      return comment;
    }
  };
  useEffect(() => {
    const clickOutSide = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target) && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortBy(false);
      };
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  }, []);
  
  useEffect(() => {
    if (flag) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [flag]);
  return (
    <>
      {flag && <div className='fixed inset-0 bg-black bg-opacity-50 ml-[15.2rem]' onClick={() => {
        dispatch(toogleState(false));
      }}></div>}
    <div className='flex justify-between gap-6 mt-4'>
      <div className='bg-[#212121] ml-[6.5rem] mb-40'>
        <iframe
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='rounded-2xl mb-7 w-[57.5rem] h-[32.5rem]'
        ></iframe>
        <p className='text-white text-xl font-semibold w-[50rem] -mt-4'>{data?.videoData?.snippet?.title}</p>
        <div className='flex mt-2'>
          <div className='flex'>
            <img src={dp} alt="channel" className='w-10 h-10 rounded-full mr-3' />
            <div className='text-white'>
              <p className='text-md font-medium text-white -mt-[0.1rem]'>
                {data?.videoData?.snippet?.channelTitle.length > 17
                  ? data?.videoData?.snippet?.channelTitle.slice(0, 12) + "..."
                  : data?.videoData?.snippet?.channelTitle}
              </p>
              <p className='text-[#AAAAAA] text-sm -mt-[0.15rem]'>
                {formatCommentCount(subscribe?.items[0]?.statistics?.subscriberCount)} subscribers
              </p>
            </div>
            <button className='bg-[#F1F1F1] rounded-full w-[6.5rem] h-9 ml-6 font-medium mt-1 hover:opacity-85'>Subscribe</button>
          </div>
          <div className='flex ml-[8.8rem] mt-1'>
            <div className='flex items-center mr-2 ml-[4.6rem]'>
              {data?.videoData?.statistics?.likeCount && (
                <button className='flex justify-center bg-[#FFFFFF1A] items-center w-[5.5rem] h-9 rounded-tl-3xl rounded-bl-3xl hover:bg-[#ffffff35] border-r-2 border-[#ffffff35]'>
                  <img src={likes} alt='like' className='h-6 mx-1' />
                  <p className='text-white font-semibold'>{formatLikeCount(data?.videoData?.statistics?.likeCount)}</p>
                </button>
              )}
              <button className='flex justify-center bg-[#FFFFFF1A] items-center w-14 h-9 rounded-tr-3xl rounded-br-3xl hover:bg-[#ffffff35]'>
                <img src={unlike} className='h-6 mx-1' alt='unlike' />
              </button>
            </div>
            <button className='flex mr-2 bg-[#FFFFFF1A] items-center w-[6rem] h-9 rounded-3xl hover:bg-[#ffffff35]'>
              <img src={share} alt='share' className='h-6 mx-1 ml-2' />
              <p className='text-white font-semibold'>Share</p>
            </button>
            <button className='flex mr-2 bg-[#FFFFFF1A] items-center w-[5.5rem] h-9 rounded-3xl hover:bg-[#ffffff35]'>
              <img src={save} alt='save' className='h-6 mx-1 ml-3' />
              <p className='text-white font-semibold'>Save</p>
            </button>
            <button className='flex justify-center bg-[#FFFFFF1A] items-center w-11 h-9 rounded-full hover:bg-[#ffffff35]'>
              <img src={dots} alt='dots' className='h-6' />
            </button>
          </div>
        </div>
        <Description data={data?.videoData?.snippet} subscribe={subscribe?.items[0]?.statistics?.subscriberCount}/>
        <div className='flex'>
          <p className='text-white font-bold text-xl mb-10 mt-6'>{formatCommentCount(data?.videoData?.statistics?.commentCount)} Comments</p>
          <div className='relative z-10'>
            <div className='flex ml-10 cursor-pointer' ref={sortRef} onClick={() => setSortBy(!sortBy)}>
              <img src={sorting} alt="sortingIcon" className="h-8 w-7 mt-5 mr-3" />
              <p className='text-white mb-5 mt-6 font-semibold'>Sort by</p>
            </div>
            {sortBy && (
              <div className='bg-[#3e3e3e] w-[8.5rem] h-28 flex flex-col items-center absolute left-10 justify-center rounded-lg z-20' ref={dropdownRef}>
               <Link className={`${!sortData?'text-white font-normal px-[0.85rem] py-[0.6rem] bg-[#ffffff3d] mb-2':'text-white font-normal pb-5 hover:px-[0.85rem] hover:py-[0.6rem] hover:bg-[#ffffff18] mt-2'}`}><p onClick={() => { setSortData(false); setSortBy(false); }}>Top comments</p></Link>
                <Link className={`${sortData?'text-white font-normal pb-2  px-[1.5rem] py-[0.6rem] bg-[#ffffff3d] mb-3':'text-white font-normal pb-2 mr-3 hover:px-[1.5rem] hover:py-[0.6rem] hover:bg-[#ffffff18] hover:mb-3 hover:mr-0'}`}><p onClick={() => { setSortData(true); setSortBy(false); }}>Newest first</p></Link>
              </div>
            )}
          </div>
        </div>
        <div className='z-40'>
          {sortData
            ? comm?.items?.slice().sort((a, b) =>
              new Date(b?.snippet?.topLevelComment?.snippet?.publishedAt) -
              new Date(a?.snippet?.topLevelComment?.snippet?.publishedAt)
            ).map((data) => (
              <Comments key={data?.id} commentData={data?.snippet?.topLevelComment?.snippet} />
            ))
            : comm?.items?.slice().sort((a, b) =>
              new Date(a?.snippet?.topLevelComment?.snippet?.publishedAt) -
              new Date(b?.snippet?.topLevelComment?.snippet?.publishedAt)
            ).map((data) => (
              <Comments key={data?.id} commentData={data?.snippet?.topLevelComment?.snippet} />
            ))}
        </div>
      </div>
      <div className='w-[25rem]'>
        {Isshorts > 3&&<div className='flex'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/724px-Youtube_shorts_icon.svg.png' alt='YTShorts' className='mt-1 w-5 h-6 mr-2' />
          <p className='text-white text-xl font-semibold'>Shorts</p>
        </div>}
        <Shorts channelId={data} setIsShorts={setIsShorts}/>
      </div>
      </div>
      </>
  );
};

export default Watch;
