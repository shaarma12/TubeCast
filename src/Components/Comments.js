import React from 'react'
import unlike from "../Images/unlike.png";
import likes from "../Images/likes.png";

const Comments = ({ commentData }) => {
  console.log("commentData", commentData);
  const {authorDisplayName,likeCount,authorProfileImageUrl,textOriginal,publishedAt} = commentData;
  return (
    <div className='flex mb-6'> 
          <img className='rounded-full h-10' src={authorProfileImageUrl} alt='authImg'/>
          <div className='ml-3'>
              <div className='flex text-sm'>
          <p className='text-white font-bold mr-2'>{authorDisplayName}</p>
                  <p className='text-[#AAAAAA]'>2 minutes ago</p>
              </div>
        <p className='text-white w-[44rem]'>{textOriginal.split("\n").map((line,index) => (<React.Fragment key = { index }>{ line}<br/></React.Fragment>))}</p>
              <div className='flex mt-4'>
                  <div className='flex mr-3'>
                      <img src={likes} alt='likes' className='h-7 mr-1 hover:rounded-full hover:bg-[#AAAAAA] cursor-pointer'/>
            {likeCount > 0&&<p className='text-white'>{likeCount}</p>}
                    </div>
                    <div className='flex'>
                      <img src={unlike} alt='unlike' className='h-7 ml-1 hover:rounded-full hover:bg-[#AAAAAA] cursor-pointer'/>
                    </div>
                </div>
          </div>
    </div>
  )
}

export default Comments
