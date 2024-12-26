import React from "react";
import useVideoId from "../utils/useVideoId";
import { Link } from "react-router-dom";
import { apiResponse } from "../utils/dataSlice";
import { useDispatch } from "react-redux";
import ThreeDotsH from "../Images/ThreeDotsH.png";

const RecommendCard = ({ VideoData }) => {
  const dispatch = useDispatch();
  const params = VideoData?.id?.videoId;
  const { data } = useVideoId(params);
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
    const diffInSeconds = Math.floor(diffInMs / 1000);
    // Determine the time difference in various units
    const weeksDiff = Math.floor(diffInDays / 7);
    const monthsDiff = Math.floor(diffInDays / 30);
    const yearsDiff = Math.floor(diffInDays / 365);

    // Determine the time category
    let timeDiff;
    if (diffInMinutes === 0) {
      if (diffInSeconds === 1) {
        timeDiff = `${diffInHours} second ago`;
      } else {
        timeDiff = `${diffInHours} seconds ago`;
      }
    } else if (diffInHours === 0) {
      if (diffInMinutes === 1) {
        timeDiff = `${diffInHours} minute ago`;
      } else {
        timeDiff = `${diffInHours} minutes ago`;
      }
    } else if (diffInDays === 0) {
      if (diffInHours === 1) {
        timeDiff = `${diffInHours} hour ago`;
      } else {
        timeDiff = `${diffInHours} hours ago`;
      }
    } else if (diffInDays < 7) {
      if (diffInDays === 1) {
        timeDiff = `${diffInDays} day ago`;
      } else {
        timeDiff = `${diffInDays} days ago`;
      }
    } else if (diffInDays < 30) {
      if (weeksDiff === 7) {
        timeDiff = `${weeksDiff} week ago`;
      } else {
        timeDiff = `${weeksDiff} weeks ago`;
      }
    } else if (diffInDays < 365) {
      if (monthsDiff === 30) {
        timeDiff = `${monthsDiff} month ago`;
      } else {
        timeDiff = `${monthsDiff} months ago`;
      }
    } else {
      if (yearsDiff === 365) {
        timeDiff = `${yearsDiff} year ago`;
      } else {
        timeDiff = `${yearsDiff} years ago`;
      }
    }

    return timeDiff;
  }
  const viewFormat = (views) => {
    let res;
    if (views >= 1000000) {
      res = Math.floor(views / 1000000) + "M";
    } else if (views >= 1000) {
      res = Math.floor(views / 1000) + "K";
    } else {
      res = Math.floor(views);
    }
    return res;
  };

  return (
    <div className="flex">
      <Link
        to={`/watch?v=${VideoData?.id?.videoId}`}
        className="flex mt-2 mb-1"
        onClick={() => dispatch(apiResponse(data))}
      >
        <div className="w-[10.5rem] h-[6rem]">
          <img
            src={VideoData?.snippet?.thumbnails?.high?.url}
            alt="videoImg"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="ml-2">
          <p className="text-white w-[12rem] font-semibold">
            {VideoData?.snippet?.title.length > 40
              ? VideoData?.snippet?.title.slice(0, 39) + "..."
              : VideoData?.snippet?.title}
          </p>
          <p className="text-[#AAAAAA] text-sm font-semibold mt-1">
            {VideoData?.snippet?.channelTitle.length >31?VideoData?.snippet?.channelTitle.slice(0,30)+"...":VideoData?.snippet?.channelTitle}
          </p>
          <div className="text-[#AAAAAA] text-sm font-semibold flex">
            <p className="mr-1">{viewFormat(data?.statistics?.viewCount)}</p>
            <p>views</p>
            <p className="mx-2 font-extrabold -mt-1">.</p>
            <p className="mr-1">
              {getTimeDifference(VideoData?.snippet?.publishedAt).slice(0, 1)}
            </p>
            <p>{getTimeDifference(VideoData?.snippet?.publishedAt).slice(2)}</p>
          </div>
        </div>
      </Link>
      <img src={ThreeDotsH} alt="dots" className="w-5 h-5 mt-2 ml-1" />
    </div>
  );
};

export default RecommendCard;
