import { useEffect, useState } from 'react'
import { VIDEOID_API } from '../constant'


const useVideoId = (videoID) => {
    const [data, setData] = useState({});
    const videoData = async() => {
        const Data = await fetch(VIDEOID_API + videoID);
        const DataJSon = await Data.json();
        setData(DataJSon?.items[0]);
    } 
    useEffect(() => {
        videoData();
    }, []);
    return { data };
}

export default useVideoId
