import React from "react";
import ThreeDotsH from "../Images/ThreeDotsH.png";
import useVideoId from "../utils/useVideoId";
import { Link } from "react-router-dom";
const ShortsCard = ({ info }) => {
  const { data } = useVideoId(info?.id?.videoId);
  const viewFormat = (views) => {
    let res;
    if (views >= 1000000) {
      res = (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      res = views / 1000 + "K";
    } else {
      res = views;
    }
    return res;
  };
  return (
    <Link
      to={`/shorts/${info?.id?.videoId}`}
      className="w-[8rem] h-[15rem] rounded-lg"
    >
      <img
        src={info?.snippet?.thumbnails?.high?.url}
        alt="ShortsVideo"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="flex mt-2">
        <p className="w-[12rem] text-white font-semibold text-lg">
          {info?.snippet?.title.length > 9
            ? info?.snippet?.title.slice(0, 8) + "..."
            : info?.snippet?.title}
        </p>
        <img src={ThreeDotsH} className="w-6 h-6 ml-1 mt-2" />
      </div>
      <p className="text-[#AAAAAA]">
        {viewFormat(data?.statistics?.viewCount)} views
      </p>
    </Link>
  );
};

export default ShortsCard;
