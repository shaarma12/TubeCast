import React from "react";
import Home from "../Images/Home.png";
import shorts from "../Images/shorts.png";
import subscription from "../Images/subscription.png";
import you from "../Images/you.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toogleTag } from "../utils/toggleSlice";
const SmallSidebar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">
        <img
          src={Home}
          alt="home"
          className="ml-6 mb-8 mt-3"
          onClick={() => {
            dispatch(toogleTag(true));
          }}
        />
      </Link>
      <img src={shorts} alt="shorts" className="ml-6 mb-8" />
      <img src={subscription} alt="subscription" className="ml-6 mb-8" />
      <img src={you} alt="you" className="ml-6 mb-8" />
    </div>
  );
};

export default SmallSidebar;
