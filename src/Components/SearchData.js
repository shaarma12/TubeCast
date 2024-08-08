import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SUGGESTION_DATA_API } from '../constant';
import SearchDataCard from './SearchDataCard';

const SearchData = () => {
    const [searchParams] = useSearchParams();
    let params = searchParams.get("search_query");
    const [searchData, setSearchData] = useState([]);
    useEffect(() => {
        getSearchData();
    }, [params]);
    const getSearchData = async() => {
        const data = await fetch(SUGGESTION_DATA_API + params);
        const dataJson = await data.json();
      setSearchData(dataJson?.items);
      console.log("DataJson", searchData);
      console.log("params", params);
    }
  return (
    <div className='h-[37rem] overflow-y-scroll no-scrollbar'>
      {searchData.map((i) => {
        return <SearchDataCard value={i} />
          })}
    </div>
  )
}

export default SearchData
