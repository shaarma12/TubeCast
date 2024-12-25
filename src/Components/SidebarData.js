import { Tuple } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toogleBars, toogleTag } from "../utils/toggleSlice";

const SidebarData = ({ data }) => {
  const [isActive, setIsactive] = useState(false);
  const dispatch = useDispatch();
  return (
    <Link to={data.link}>
      <div
        className={`flex text-white w-56 ml-5 p-2 rounded-lg ${
          isActive ? "bg-[#393939] cursor-pointer" : ""
        } hover:bg-[#393939] hover:cursor-pointer`}
        onClick={() => {
          setIsactive(isActive);
          dispatch(toogleTag(true));
          dispatch(toogleBars(true));
        }}
      >
        <img src={data?.icon} alt="Home" className="pr-6 w-[3.2rem]" />
        <p className="text-lg font-semibold">{data?.name}</p>
      </div>
    </Link>
  );
};

export default SidebarData;
