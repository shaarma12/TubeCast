import React from 'react'
import SmallSidebar from './SmallSidebar'
import LargeSidebar from './LargeSidebar'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const toggle = useSelector((store) => store.Toggle.flag); 
  const sideBarsToggle = useSelector((store) => store.Toggle.sideBars);
  return (
    <div>
      {toggle ? <LargeSidebar /> : sideBarsToggle&&<SmallSidebar />}
    </div>
  )
}

export default Sidebar
