import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../constant'
import Video from './Video';

const VideoContainer = () => {

  const [youtubeData, setYouTubeData] = useState(null);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API);
    const response = await data.json();
    setYouTubeData(response);
    console.log("youtube",youtubeData);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className='ml-[4.2rem] mt-8'>
      <Video data={youtubeData?.items[0]}/>
    </div>
  )
}

export default VideoContainer
