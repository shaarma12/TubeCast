import React from 'react'

const Description = ({ data }) => {
    console.log("Description", data);
  return (
    <div>
    <p className='text-white'>{data }</p>
    </div>
  )
}

export default Description
