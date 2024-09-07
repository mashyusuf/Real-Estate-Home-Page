import React from 'react';

export default function Button() {
  return (
    <div className='bg-[#aa8453] flex flex-col sm:grid sm:grid-cols-2 sm:items-center px-10 py-12'>
      <h1 className='text-4xl font-bold text-white text-center sm:text-left sm:col-start-1 sm:col-end-2'>
        Are you looking for a House<br />or Property Customer?
      </h1>
      <button className='btn bg-white text-black mt-6 sm:mt-0 sm:col-start-2 sm:col-end-3'>
        Subscribe Now
      </button>
    </div>
  );
}
