import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchDataCard from "./SearchDataCard";
import useSearchVideo from "../utils/useSearchVideo";

const SearchData = () => {
  const [searchParams] = useSearchParams();
  let params = searchParams.get("search_query");
  console.log("params", params);
  // calling the custom hook for search data.
  const { searchData } = useSearchVideo({params});
  console.log("SearchData", searchData);
  return (
    <div className="h-[37rem] overflow-y-scroll no-scrollbar">
      {searchData.map((i, index) => {
        return <SearchDataCard key={index} value={i} />;
      })}
    </div>
  );
};

export default SearchData;
