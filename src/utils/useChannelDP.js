import { useEffect, useState } from "react";
import { CHANNELDP_API } from "../constant";

const useChannelDP = (channelId) => {
  const [dp, setDp] = useState();
  useEffect(() => {
    channelDP();
  }, [channelId]);
  const channelDP = async () => {
    const data = await fetch(CHANNELDP_API + channelId);
    const dataJson = await data.json();
    if (dataJson?.items) {
      setDp(dataJson?.items[0]?.snippet?.thumbnails?.default?.url);
    }
  };
  return { dp };
};

export default useChannelDP;
