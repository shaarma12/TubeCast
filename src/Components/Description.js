import React, { useState } from 'react';
import DOMPurify from 'dompurify';
const Description = ({ data,views,date,thumbnails,channelTitle }) => {
  const [toggle, setToggle] = useState(false);
  // Function to format the text by adding line breaks and converting URLs to links
  const formatText = (text) => {
    // Convert URLs into clickable links
    let formattedText = text.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-500">$1</a>'
    );
    
    formattedText = formattedText.replace(
      /#(\w+)/g,
      '<a href="/hashtag/$1" target="_blank" rel="noopener noreferrer" class="text-blue-500">#$1</a>'
    );
    // Add line breaks for new lines
    formattedText = formattedText.replace(/\n/g, '<br />');

    return formattedText;
  };
  function getTimeDifference(dateString) {
    // Parse the given date string
    const givenDate = new Date(dateString);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = currentDate - givenDate;

    // Calculate the difference in days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInSeconds = Math.floor(diffInMs / (1000));
    // Determine the time difference in various units
    const weeksDiff = Math.floor(diffInDays / 7);
    const monthsDiff = Math.floor(diffInDays / 30);
    const yearsDiff = Math.floor(diffInDays / 365);

    // Determine the time category
    let timeDiff;
    if (diffInMinutes === 0) {
      if (diffInSeconds === 1) {
        timeDiff = `${diffInHours} second ago`;
      }
      else {
        timeDiff = `${diffInHours} seconds ago`;
      }
    }
    else if (diffInHours === 0) {
      if (diffInMinutes === 1) {
        timeDiff = `${diffInHours} minute ago`;
      }
      else {
        timeDiff = `${diffInHours} minutes ago`;
      }
    }
    else if (diffInDays === 0) {
      if (diffInHours === 1) {
        timeDiff = `${diffInHours} hour ago`;
      }
      else {
        timeDiff = `${diffInHours} hours ago`;
      }
    }
    else if (diffInDays < 7) {
      if (diffInDays === 1) {
        timeDiff = `${diffInDays} day ago`;
      }
      else {
        timeDiff = `${diffInDays} days ago`;
      }
    } else if (diffInDays < 30) {
      if (weeksDiff === 7) {
        timeDiff = `${weeksDiff} week ago`;
      }
      else {
        timeDiff = `${weeksDiff} weeks ago`;
      }
    } else if (diffInDays < 365) {
      if (monthsDiff === 30) {
        timeDiff = `${monthsDiff} month ago`;
      }
      else {
        timeDiff = `${monthsDiff} months ago`;
      }
    } else {
      if (yearsDiff === 365) {
        timeDiff = `${yearsDiff} year ago`;
      }
      else {
        timeDiff = `${yearsDiff} years ago`;
      }
    }

    return timeDiff;
  }
  const viewCount = (view) => {
    if (view >= 1000000)
    {
      return (view/1000000).toFixed(1) + "M";
    }
    else if (view >= 1000)
    {
      return (view / 1000).toFixed(1) + "K";
    }
    else {
      return view;
    }
  }
  // sanitized data as we are using dangerouslySetInnerHTML which may lead to XSS attacks.
  const sanitizedData = DOMPurify.sanitize(formatText(data));
  return (
    <div className='w-[50rem] bg-[#FFFFFF1A] rounded-xl p-3 mt-4 cursor-pointer' onClick={() => {
      setToggle(!toggle);
    }}>
      <div className='flex text-white font-bold'>
        {views&&<p className='mr-2'>{viewCount(views)} views</p>}
        <p>{getTimeDifference(date) }</p>
        </div>
      {toggle?<div><div className='text-white font-semibold' dangerouslySetInnerHTML={{ __html: sanitizedData }} /><div className='flex mt-5'>
          <img src={thumbnails?.maxres?.url} alt='url' className='w-12 h-12 rounded-full mr-3' />
          <div className='text-white'>
            <p className='text-xl font-bold text-white -mt-[0.1rem]'>{channelTitle.length > 20 ? channelTitle.slice(0,19)+"...":channelTitle}</p>
            <p className='text-[#AAAAAA] text-sm -mt-[0.15rem]'>54.9M subscribers</p>
          </div>
        </div><p className='font-semibold text-white mt-8'>Show less</p></div>
      :<div className='text-white font-semibold' dangerouslySetInnerHTML={{ __html: sanitizedData.length > 245? sanitizedData.slice(0,244)+"  ...more":formatText(data) }} />
      }
    </div>
  );
}

export default Description;
