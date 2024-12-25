import React, { useEffect, useState } from "react";
import { SUGGESTION_DATA_API } from "../constant";

const useSearchVideo = ({ params }) => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    getSearchData();
  }, [params]);
  const getSearchData = async () => {
    const data = await fetch(SUGGESTION_DATA_API + params);
    const dataJson = await data.json();
    setSearchData(dataJson?.items);
  };

  return { searchData };
};

export default useSearchVideo;
