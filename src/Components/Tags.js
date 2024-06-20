import React from 'react'
import SmallTag from './SmallTag'
import { TAGS } from '../constant'

const Tags = () => {
  return (
    <div className='flex ml-14 mt-3 overflow-x-scroll no-scrollbar w-[85rem]'>
      <div className='flex rounded-md drop-shadow-lg shadow-black w-[130rem] pl-2'>
        {TAGS.map((i) => {
          return <SmallTag data={i} />
        })}
      </div>
    </div>
  )
}

export default Tags
