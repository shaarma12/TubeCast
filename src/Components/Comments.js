import React from 'react'
import unlike from "../Images/unlike.png";
import likes from "../Images/likes.png";
import user from "../Images/user.png";

const Comments = ({ commentData }) => {
  const { authorDisplayName, likeCount, authorProfileImageUrl, textOriginal, publishedAt } = commentData;
  const handleError = (e) => {
    e.target.src = user;
  };
  const commentPublishedDateModifier = (publishedAt) => {
    const actualDate = new Date(publishedAt);
    const currentDate = new Date();
    const diffinMs = currentDate - actualDate;

    const diffinSec  =  Math.floor((diffinMs) / 1000);
    const diffinMin  =  Math.floor((diffinMs) / (1000 * 60));
    const diffinHr   =  Math.floor((diffinMs) / (1000 * 60 * 60));
    const diffinDays =  Math.floor((diffinMs) / (1000 * 60 * 60 * 24));
    
    const diffinWeeks = Math.floor((diffinDays) / 7);
    const diffinMonths = Math.floor((diffinDays) / 30);
    const diffinYears = Math.floor((diffinDays) / 365);

    let result;
    if (diffinMin === 0)
    {
      if (diffinSec === 1)
      {
        result = `${diffinSec} second ago`;
      }
      else {
        result = `${diffinSec} seconds ago`;
      }
    }
    else if (diffinHr === 0)
    {
      if (diffinMin === 1)
      {
        result = `${diffinMin} minute ago`;
      }
      else {
        result = `${diffinMin} minutes ago`;
      }
    }
    else if (diffinDays === 0)
    {
      if (diffinHr === 1)
      {
        result = `${diffinHr} hour ago`;
      }
      else {
        result = `${diffinHr} hours ago`;
      }
    }
    else if (diffinDays < 7)
    {
        if (diffinDays === 1) {
          result = `${diffinDays} day ago`;
        }
      else {
        result = `${diffinDays} days ago`;
      }
    }
    else if (diffinDays < 30)
    {
      if (diffinWeeks === 1)
      { 
        result = `${diffinWeeks} week ago`;
      }
      else {
        result = `${diffinWeeks} weeks ago`;
      }
    }
    else if (diffinDays < 365)
    {
      if (diffinDays === 30)
      {
        result = `${diffinMonths} month ago`;
      }
      else {
        result = `${diffinMonths} months ago`;
      }
    }
    else {
      if (diffinDays === 365)
      {
        result = `${diffinYears} year ago`;
      }
      else {
        result = `${diffinYears} years ago`;
      }
    }
    return result;
  };
  console.log("publishedAt", new Date(publishedAt));
  console.log("publishedAtModifier", commentPublishedDateModifier(publishedAt));
  return (
    <div className='flex mb-6'> 
          <img className='rounded-full h-10' src={authorProfileImageUrl} alt='authImg' onError={handleError}/>
          <div className='ml-3'>
              <div className='flex text-sm'>
          <p className='text-white font-bold mr-2'>{authorDisplayName}</p>
          <p className='text-[#AAAAAA]'>{ commentPublishedDateModifier(publishedAt)}</p>
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
