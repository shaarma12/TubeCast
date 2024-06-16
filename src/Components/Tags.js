import React from 'react'
import SmallTag from './SmallTag'

const Tags = () => {
  return (
    <div className='flex ml-14 mt-3 overflow-x-scroll no-scrollbar w-[85rem]'>
      <div className='flex rounded-md drop-shadow-lg shadow-black w-[130rem] pl-2'>
        <SmallTag data="All" />
        <SmallTag data="Live" />
        <SmallTag data="Sports" />
        <SmallTag data="Software" />
        <SmallTag data="Reaction" />
        <SmallTag data="News" />
        <SmallTag data="Cricket" />
        <SmallTag data="Movies" />
        <SmallTag data="Thriller" />
        <SmallTag data="Indian" />
        <SmallTag data="Mixes" />
        <SmallTag data="Albums" />
        <SmallTag data="Recently" />
        <SmallTag data="Football" />
        <SmallTag data="Shoes" />
        <SmallTag data="Clothes" />
        <SmallTag data="Fashion" />
        <SmallTag data="Taj" />
        <SmallTag data="Taj" />
        <SmallTag data="Taj" />
        <SmallTag data="Taj" />
        <SmallTag data="Taj" />
        <SmallTag data="Taj" />
      </div>
    </div>
  )
}

export default Tags
