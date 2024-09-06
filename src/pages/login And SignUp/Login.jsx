import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";<FaPhoneAlt />
export default function Login() {
  return (
    <div className='relative '>
      {/* Details Section */}
      <div className='absolute -top-1 px-10  left-0 right-0 bg-transparent p-4 flex justify-between shadow-md z-10'>
        <div className=''>
            <p className='flex text-white text-sm items-center'><FaPhoneAlt /> <span className='ml-2'> Need Support ? +1-435-782-4312</span> </p>
        </div>
        <div className='flex space-x-2'>
          <p className='text-white text-sm'>About</p>
          <p className='text-white text-sm'>Login</p>
          <p className='text-white text-sm'>Sign Up</p>
        </div>
      </div>
      
    </div>
  );
}
