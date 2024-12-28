import React from "react";
import useSearchVideo from "../utils/useSearchVideo";
import RecommendCard from "./RecommendCard";

const Recommend = ({ Recomm }) => {
  const RecommendWord = Recomm.match(/#\w+/);
  const params = RecommendWord ? RecommendWord[0].slice(1) : " ";
  const { searchData } = useSearchVideo({ params });

  return (
    <div className="border-t-[0.5px] border-[#8888] mt-[5.5rem]">
      {searchData.map((i) => {
        return <RecommendCard key={i?.id?.videoId} VideoData={i} />;
      })}
    </div>
  );
};

export default Recommend;
