import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { apiFormData } from '../utils/dataSlice';

const Forms = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: '',
        email: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    }
    const handeleSubmit = (e) => {
        e.preventDefault();
        dispatch(apiFormData(data));
    }
  return (
      <div className='flex items-center justify-center'>
          <form className='bg-white p-6 rounded shadow-md w-full' onSubmit={handeleSubmit}>
              <div>
                  <label htmlFor='email' className='block text-sm font font-medium'>
                      Email
                  </label>
                  <input type='email' id='email' name='email' className=' mt-1 block w-full p-2 border rounded-md' placeholder='Enter Your Email' required onChange={handleChange}/>
              </div>
              <div>
                  <label htmlFor='name' className='block text-sm font font-medium'>
                      Name
                  </label>
                  <input type='text' id='name' name='name' className=' mt-1 block w-full p-2 border rounded-md' placeholder='Enter Your Email' required onChange={handleChange}/>
              </div>
              <button type='submit' className='w-full bg-red-600 text-white py-2 px-2 rounded-md hover:bg-blue-500'>Submit</button>
          </form>
    </div>
  )
}

export default Forms
