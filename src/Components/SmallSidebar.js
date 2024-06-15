import React from 'react'
import Home from '../Images/Home.png'
import shorts from '../Images/shorts.png'
import subscription from '../Images/subscription.png'
import you from '../Images/you.png'
const SmallSidebar = () => {
  return (
    <div>
      <img src={Home} alt='home' className='ml-6 mb-8 mt-3'/>
      <img src={shorts} alt='shorts' className='ml-6 mb-8'/>
      <img src={subscription} alt='subscription' className='ml-6 mb-8'/>
      <img src={you} alt='you' className='ml-6 mb-8'/>
    </div>
  )
}

export default SmallSidebar
