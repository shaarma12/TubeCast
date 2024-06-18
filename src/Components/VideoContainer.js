import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../constant'
import Video from './Video';

const VideoContainer = () => {

  const [youtubeData, setYouTubeData] = useState(null);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API);
    const response = await data.json();
    setYouTubeData(response);
    console.log("youtube",response);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className='ml-[4.2rem] mt-8 flex flex-wrap gap-5'>
      {youtubeData?.items.map((i) => {
        return <Video data={i} />
      })}
    </div>
  )
}

export default VideoContainer
