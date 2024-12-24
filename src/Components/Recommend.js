import React from 'react'
import useSearchVideo from '../utils/useSearchVideo';

const Recommend = ({ Recomm }) => {
    // console.log("Recomm", Recomm);
    const RecommendWord = Recomm.match(/#\w+/);
    const params = RecommendWord[0].slice(1);
    const { searchData } = useSearchVideo({ params });
    console.log("searchData", searchData);
  return (
    <div className='border-t-[0.5px] border-[#8888] mt-[5.5rem]'>
    </div>
  )
}

export default Recommend
