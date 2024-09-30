import { useEffect, useState } from "react";
import { COMMENTS_API } from "../constant";

const useComment = (videoId) => {
    const [comm, setComm] = useState();
    const getComment = async() => {
        const data = await fetch(COMMENTS_API + videoId);
        const result = await data.json();
        setComm(result);
    }
    useEffect(() => {
        getComment();  
    }, [videoId]);
    return ({comm});
};

export default useComment;