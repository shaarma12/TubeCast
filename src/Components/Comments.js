import React from 'react'
import unlike from "../Images/unlike.png";
import likes from "../Images/likes.png";

const Comments = () => {
  return (
    <div className='flex mb-6'> 
          <img className='rounded-full h-10' src='https://yt3.ggpht.com/ytc/AIdro_nd-vlBKVo5vb_gAzEJPPrEUmKAXLoruOBOoJd_R_KvGKjJu7amWAiwOcKi9RlsoFVuaw=s48-c-k-c0x00ffffff-no-rj' alt='authImg'/>
          <div className='ml-3'>
              <div className='flex text-sm'>
                  <p className='text-white font-bold mr-2'>@Upendramb</p>
                  <p className='text-[#AAAAAA]'>2 minutes ago</p>
              </div>
              <p className='text-white'>Erripuku mega fans😂😂😂</p>
              <div className='flex mt-4'>
                  <div className='flex mr-3'>
                      <img src={likes} alt='likes' className='h-7 mr-1 hover:rounded-full hover:bg-[#AAAAAA] cursor-pointer'/>
                      <p className='text-white'>10</p>
                    </div>
                    <div className='flex'>
                      <p className='text-white'>1</p>
                      <img src={unlike} alt='unlike' className='h-7 ml-1 hover:rounded-full hover:bg-[#AAAAAA] cursor-pointer'/>
                    </div>
                </div>
          </div>
    </div>
  )
}

export default Comments
