import React, { useEffect, useState } from 'react'
import ShortsCard from './ShortsCard'
import { YOUTUBE_SHORTS_API } from '../constant';
import leftArrow from "../Images/leftArrow.png";
import rightArrow from "../Images/rightArrow.png";
const Shorts = ({channelId}) => {
  const [shorts, setShorts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex + 3 < shorts.length)
    {
      setCurrentIndex(currentIndex + 3);
    }
  }
  const handlePrevious = () => {
    if (currentIndex - 3 >= 0)
    {
      setCurrentIndex(currentIndex - 3);
    }
  }
  const search = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') {
        return true;
      }
    }
    return false;
  };
  const getShortsVideo = async() => {
    const rep = await fetch(YOUTUBE_SHORTS_API + channelId?.videoData?.snippet?.channelId);
    const res = await rep.json();
    const filterRes = res?.items.filter((i) => {
      return search(i?.snippet?.title) === true;
    })
    console.log("filterData",filterRes);
    setShorts(filterRes);
  };
  useEffect(() => {
    getShortsVideo();
  }, []);
  return (
    <div className='flex items-center justify-center'>
      <img src={leftArrow} alt='leftArrow' className={`${currentIndex === 0 ?'hidden':'w-10 h-10 absolute left-[66rem] cursor-pointer hover:-scale-y-105'}`} onClick={handlePrevious}/>
      {shorts.length >= 3 && <div className='flex gap-1 w-[25rem]'>
        {shorts.slice(currentIndex,currentIndex + 3).map((i) => {
          return <ShortsCard info={i?.snippet?.thumbnails?.high?.url}/>
        })}
      </div>}
      <img src={rightArrow} alt='rightArrow' className={`${currentIndex === shorts.length-4 ? 'hidden':'w-10 h-10 absolute left-[90.3rem] cursor-pointer hover:-scale-y-105'}`} onClick={handleNext}/>
      </div>
  )
}

export default Shorts
