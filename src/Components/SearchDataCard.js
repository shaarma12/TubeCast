import React from 'react'
import { Link } from 'react-router-dom';
import { apiResponse } from '../utils/dataSlice';
import { useDispatch } from 'react-redux';
import useVideoId from '../utils/useVideoId';
import verify from "../Images/verify.png";
const SearchDataCard = ({ value }) => {
  const dispatch = useDispatch();
  // custom hook for getting Data through videoID
  const { data } = useVideoId(value?.id?.videoId);
  console.log("Data", data);
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
      <Link to={`/watch?v=${data?.id}`}><div className='flex w-[72.2rem] -mb-12 mt-4 h-[21rem] hover:cursor-pointer ml-16' onClick={() => {
        dispatch(apiResponse(data));
      }}>
        <img src={data?.snippet?.thumbnails?.maxres?.url ? data?.snippet?.thumbnails?.maxres?.url : data?.snippet?.thumbnails?.high?.url} alt='videoImage' className='rounded-lg w-[30rem] h-72' />
        <div className='mt-3'>
          <div className='ml-3'>
            <p className='text-white w-full font-semibold text-lg'>{data?.snippet?.title}</p>
            <div className='text-[#AAAAAA] font-semibold text-sm flex ml-[0.1rem]'>
              <p>{formatViewCount(data?.statistics?.viewCount)} Views</p>
              <p className='text-2xl -mt-3 mx-1'>.</p>
              <p>{getTimeDifference(data?.snippet?.publishedAt)}</p>
            </div>
            <div className='flex mt-3'>
          <img src={data?.snippet?.thumbnails?.maxres?.url ? data?.snippet?.thumbnails?.maxres?.url : data?.snippet?.thumbnails?.high?.url} alt='videoImage' className='rounded-full w-8 h-8' />
              <p className='text-[#AAAAAA] font-semibold mt-1 ml-2 mr-1'>{data?.snippet?.channelTitle.length > 32 ? data?.snippet?.channelTitle.substr(0, 32) : data?.snippet?.channelTitle}</p>
              {data?.contentDetails?.licensedContent&&<img src={verify} alt="verified" className='w-4 h-4 mt-2' />}
              </div>
          <p className='text-[#AAAAAA] mt-3 text-sm'>{ data?.snippet?.description.substr(0,99)+"..."}</p>
          </div>
        </div>
      </div></Link>
    </div>
  )
}

export default SearchDataCard
