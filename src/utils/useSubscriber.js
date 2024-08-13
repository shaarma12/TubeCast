import React, { useEffect, useState } from 'react'
import { SUBSCRIBER_API } from '../constant'

const useSubscriber = (channelId) => {
    const [subscribe, setSubscribe] = useState();
    useEffect(() => {
        subscribersData(); 
    },[])
    const subscribersData = async() => {
        const data = await fetch(SUBSCRIBER_API + channelId);
        const dataJson = await data.json();
        setSubscribe(dataJson);
    }
    return { subscribe };
}

export default useSubscriber
