import React from 'react';

const Description = ({ data,views }) => {
  // Log the data for debugging
  console.log("Description", data);

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

  return (
    <div className='w-[50rem] bg-[#FFFFFF1A] rounded-xl p-3 mt-4'>
      <p className='text-white'>{views}</p>
      <div className='text-white font-medium' dangerouslySetInnerHTML={{ __html: formatText(data) }} />
    </div>
  );
}

export default Description;
