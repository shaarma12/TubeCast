import React from "react";
import SmallSidebar from "./SmallSidebar";
import LargeSidebar from "./LargeSidebar";
import { useSelector } from "react-redux";
import WatchSidebar from "./WatchSidebar";

const Sidebar = () => {
  const toggle = useSelector((store) => store.Toggle.flag);
  const sideBarsToggle = useSelector((store) => store.Toggle.sideBars);
  return (
    <div>
      {sideBarsToggle == true && toggle ? (
        <LargeSidebar />
      ) : (
        sideBarsToggle && <SmallSidebar />
      )}
      {toggle && sideBarsToggle == false && <WatchSidebar />}
    </div>
  );
};

export default Sidebar;
