import React from 'react'
import SmallSidebar from './SmallSidebar'
import LargeSidebar from './LargeSidebar'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const toggle = useSelector((store) => store.Toggle.flag);
  return (
    <div>
      {toggle ? <LargeSidebar /> : <SmallSidebar />}
    </div>
  )
}

export default Sidebar
