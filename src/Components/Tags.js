import React from "react";
import SmallTag from "./SmallTag";
import { TAGS } from "../constant";
import { useSelector } from "react-redux";

const Tags = () => {
  const toggle = useSelector((store) => store.Toggle.flag);
  return (
    <div>
      {toggle ? (
        <div className="flex ml-14 mt-3 overflow-x-scroll no-scrollbar w-[73rem]">
          <div className="flex rounded-md drop-shadow-lg shadow-black w-[130rem] pl-2">
            {TAGS.map((i) => {
              return <SmallTag key={i} data={i} />;
            })}
          </div>
        </div>
      ) : (
        <div className="flex ml-14 mt-3 overflow-x-scroll no-scrollbar w-[85rem]">
          <div className="flex rounded-md drop-shadow-lg shadow-black w-[130rem] pl-2">
            {TAGS.map((i) => {
              return <SmallTag key={i} data={i} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tags;
