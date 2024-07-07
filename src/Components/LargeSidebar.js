import React from 'react'
import SidebarData from './SidebarData'
import { SIDEBARS, YOU, EXPLORE, MORE, GENERAL } from "../constant"
import arrow from "../Images/arrow.png"
const LargeSidebar = () => {
  return (
    <div className='h-[40rem] overflow-y-scroll no-scrollbar'>
    <div className="mt-4">
      {SIDEBARS.map((i) => {
        return <SidebarData data={i} />
      })}
      <div className="border-t-[0.3px] border-gray-500 mt-3 ml-4">
        <div className="flex items-center px-2">
          <p className="text-white font-medium text-lg mt-4 ml-2 mr-2 mb-2">You </p>
          <img src={arrow} alt="arrow" className="w-5 h-4 mt-2" />
        </div>
        <div className="-ml-4">
          {YOU.map((i) => {
            return <SidebarData data={i} />
          })}
        </div>
      </div>
      <div className="border-t-[0.3px] border-gray-500 mt-3 ml-4">
        <p className="text-white font-medium text-lg mt-4 ml-2 mr-2 mb-2 px-2">Explore </p>
        <div className="-ml-4">
          {EXPLORE.map((i) => {
            return <SidebarData data={i} />
          })}
        </div>
      </div>
      <div className="border-t-[0.3px] border-gray-500 mt-3 ml-4">
        <p className="text-white font-medium text-lg mt-4 ml-2 mr-2 mb-2 px-2">Explore </p>
        <div className="-ml-4">
          {MORE.map((i) => {
            return <SidebarData data={i} />
          })}
        </div>
      </div>
      <div className="border-t-[0.3px] border-gray-500 mt-3 ml-4">
        <p className="text-white font-medium text-lg mt-4 ml-2 mr-2 mb-2 px-2">Explore </p>
        <div className="-ml-4">
          {GENERAL.map((i) => {
            return <SidebarData data={i} />
          })}
        </div>
      </div>
      </div>
      </div>
  )
}

export default LargeSidebar
