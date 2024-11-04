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
    }
  return (
    <div className='h-[37rem] overflow-y-scroll no-scrollbar'>
      {searchData.map((i,index) => {
        return <SearchDataCard key={index} value={i} />
          })}
    </div>
  )
}

export default SearchData
