import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../constant'
import Video from './Video';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const toggle = useSelector((store) => store.Toggle.flag);
  const [youtubeData, setYouTubeData] = useState(null);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API);
    const response = await data.json();
    setYouTubeData(response);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {toggle?<div className='ml-[4.2rem] mt-8 flex flex-wrap gap-3 h-[35rem] overflow-y-scroll no-scrollbar'>
        {youtubeData?.items.map((i) => {
          return <Video data={i} />
        })}
      </div>:<div className='ml-[4.2rem] mt-8 flex flex-wrap gap-5'>
        {youtubeData?.items.map((i) => {
          return <Video data={i} />
        })}
      </div>}
    </div>
  )
}

export default VideoContainer
