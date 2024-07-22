import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Watch = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className='bg-[#212121]'>
      <iframe width="800" height="450" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='ml-40 rounded-2xl mt-4 mb-7'></iframe>
    </div>
  )
}

export default Watch
