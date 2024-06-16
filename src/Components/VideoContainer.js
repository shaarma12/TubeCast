import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../constant'
const VideoContainer = () => {
  const [youtubeData, setYouTubeData] = useState(null);
  const fetchData = async() => {
    const data = await fetch(YOUTUBE_API);
    const response = await data.json();
    setYouTubeData(response);
    console.log("youtube",youtubeData);
  }
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
      
    </div>
  )
}

export default VideoContainer
