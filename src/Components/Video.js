import React from 'react'
import { useSelector } from 'react-redux';

const Video = ({ data }) => {
  const toggle = useSelector((store) => store.Toggle.flag);
  const formatViewCount = (viewcount) => {
    if (viewcount >= 1000000) {
      return (viewcount / 1000000).toFixed(1) + 'M';
    }
    else if (viewcount >= 1000) {
      return (viewcount / 1000).toFixed(2) + 'K';
    }
    else {
      return viewcount;
    }
  }
  function getTimeDifference(dateString) {
    // Parse the given date string
    const givenDate = new Date(dateString);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = currentDate - givenDate;

    // Calculate the difference in days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInSeconds = Math.floor(diffInMs / (1000));
    // Determine the time difference in various units
    const weeksDiff = Math.floor(diffInDays / 7);
    const monthsDiff = Math.floor(diffInDays / 30);
    const yearsDiff = Math.floor(diffInDays / 365);

    // Determine the time category
    let timeDiff;
    if (diffInMinutes == 0) {
      if (diffInSeconds == 1) {
        timeDiff = `${diffInHours} second ago`;
      }
      else {
        timeDiff = `${diffInHours} seconds ago`;
      }
    }
    else if (diffInHours == 0) {
      if (diffInMinutes == 1) {
        timeDiff = `${diffInHours} minute ago`;
      }
      else {
        timeDiff = `${diffInHours} minutes ago`;
      }
    }
    else if (diffInDays == 0) {
      if (diffInHours == 1) {
        timeDiff = `${diffInHours} hour ago`;
      }
      else {
        timeDiff = `${diffInHours} hours ago`;
      }
    }
    else if (diffInDays < 7) {
      if (diffInDays == 1) {
        timeDiff = `${diffInDays} day ago`;
      }
      else {
        timeDiff = `${diffInDays} days ago`;
      }
    } else if (diffInDays < 30) {
      if (weeksDiff == 7) {
        timeDiff = `${weeksDiff} week ago`;
      }
      else {
        timeDiff = `${weeksDiff} weeks ago`;
      }
    } else if (diffInDays < 365) {
      if (monthsDiff == 30) {
        timeDiff = `${monthsDiff} month ago`;
      }
      else {
        timeDiff = `${monthsDiff} months ago`;
      }
    } else {
      if (yearsDiff == 365) {
        timeDiff = `${yearsDiff} year ago`;
      }
      else {
        timeDiff = `${yearsDiff} years ago`;
      }
    }

    return timeDiff;
  }

  return (
    <div>
      {toggle?<div className='w-[24.2rem] h-[21rem] mb-6 hover:cursor-pointer'>
        <img src={data?.snippet?.thumbnails?.maxres?.url ? data?.snippet?.thumbnails?.maxres?.url : data?.snippet?.thumbnails?.medium?.url} alt='videoImage' className='rounded-lg w-[55rem] h-56' />
        <div className='flex mt-3'>
          <img src={data?.snippet?.thumbnails?.maxres?.url ? data?.snippet?.thumbnails?.maxres?.url : data?.snippet?.thumbnails?.medium?.url} alt='videoImage' className='rounded-full w-10 h-10' />
          <div className='ml-3'>
            <p className='text-white w-[20rem] font-semibold text-lg'>{(data?.snippet?.localized?.title).length > 55 ? data?.snippet?.localized?.title.substr(0, 55) + "..." : data?.snippet?.localized?.title}</p>
            <p className='text-[#AAAAAA] font-semibold'>{data?.snippet?.channelTitle.length > 32 ? data?.snippet?.channelTitle.substr(0, 32) : data?.snippet?.channelTitle}</p>
            <div className='text-[#AAAAAA] font-semibold flex'>
              <p>{formatViewCount(data?.statistics?.viewCount)} Views</p>
              <p className='text-2xl -mt-3 mx-1'>.</p>
              <p>{getTimeDifference(data?.snippet?.publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>:<div className='w-[21rem] h-[21rem] hover:cursor-pointer'>
        <img src={data?.snippet?.thumbnails?.maxres?.url ? data?.snippet?.thumbnails?.maxres?.url : data?.snippet?.thumbnails?.medium?.url} alt='videoImage' className='rounded-lg w-[55rem] h-48' />
        <div className='flex mt-3'>
          <img src={data?.snippet?.thumbnails?.maxres?.url ? data?.snippet?.thumbnails?.maxres?.url : data?.snippet?.thumbnails?.medium?.url} alt='videoImage' className='rounded-full w-10 h-10' />
          <div className='ml-3'>
            <p className='text-white w-[17.5rem] font-semibold text-lg'>{(data?.snippet?.localized?.title).length > 55 ? data?.snippet?.localized?.title.substr(0, 55) + "..." : data?.snippet?.localized?.title}</p>
            <p className='text-[#AAAAAA] font-semibold'>{data?.snippet?.channelTitle.length > 32 ? data?.snippet?.channelTitle.substr(0, 32) : data?.snippet?.channelTitle}</p>
            <div className='text-[#AAAAAA] font-semibold flex'>
              <p>{formatViewCount(data?.statistics?.viewCount)} Views</p>
              <p className='text-2xl -mt-3 mx-1'>.</p>
              <p>{getTimeDifference(data?.snippet?.publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Video
