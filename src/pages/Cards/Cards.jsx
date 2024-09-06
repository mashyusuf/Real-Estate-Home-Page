import React from 'react';
import { FaHome, FaBuilding, FaLandmark, FaStore, FaBed, FaHotel } from 'react-icons/fa';
import { GiOfficeChair } from 'react-icons/gi';

export default function CardSection() {
  return (
    <div className='mt-20 mb-14 bg-gray-700 py-20 pb-20'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-5xl font-bold text-center text-white'>What You Are Looking For?</h1>
        <div className="divider w-1/6 mx-auto border-t border-[#aa8453] text-center mt-5 mb-5"></div>
        <p className='text-lg text-center text-white'>
          Mauris primis turpis Laoreet magna felis mi amet quam enim curae. <br /> Sodales semper tempor dictum faucibus habitasse.
        </p>

        <div className='grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center'>
          {/* Card 1 */}
          <div className='bg-white p-6 text-center rounded-md shadow-md transition duration-300 hover:bg-[#aa8453] hover:text-white group'>
            <FaHome className='mx-auto text-4xl text-[#aa8453] group-hover:text-white transition duration-300' />
            <h2 className='text-xl font-semibold mt-4'>Living House</h2>
            <p className='mt-2'>Preview listing of accommodation property living houses</p>
          </div>

          {/* Card 2 */}
          <div className='bg-white p-6 text-center rounded-md shadow-md transition duration-300 hover:bg-[#aa8453] hover:text-white group'>
            <FaLandmark className='mx-auto text-4xl text-[#aa8453] group-hover:text-white transition duration-300' />
            <h2 className='text-xl font-semibold mt-4'>Solid Land</h2>
            <p className='mt-2'>Hight listed solid use-able land in most popular area for development</p>
          </div>

          {/* Card 3 */}
          <div className='bg-white p-6 text-center rounded-md shadow-md transition duration-300 hover:bg-[#aa8453] hover:text-white group'>
            <GiOfficeChair className='mx-auto text-4xl text-[#aa8453] group-hover:text-white transition duration-300' />
            <h2 className='text-xl font-semibold mt-4'>Office Floor</h2>
            <p className='mt-2'>Preview most popular office building listed category</p>
          </div>

          {/* Card 4 */}
          <div className='bg-white p-6 text-center rounded-md shadow-md transition duration-300 hover:bg-[#aa8453] hover:text-white group'>
            <FaStore className='mx-auto text-4xl text-[#aa8453] group-hover:text-white transition duration-300' />
            <h2 className='text-xl font-semibold mt-4'>Commercial</h2>
            <p className='mt-2'>Listing Commercial property for business and factory development</p>
          </div>

          {/* Card 5 */}
          <div className='bg-white p-6 text-center rounded-md shadow-md transition duration-300 hover:bg-[#aa8453] hover:text-white group'>
            <FaBed className='mx-auto text-4xl text-[#aa8453] group-hover:text-white transition duration-300' />
            <h2 className='text-xl font-semibold mt-4'>Hostel Room</h2>
            <p className='mt-2'>If you are single looking for single living, preview the hostel listing</p>
          </div>

          {/* Card 6 */}
          <div className='bg-white p-6 text-center rounded-md shadow-md transition duration-300 hover:bg-[#aa8453] hover:text-white group'>
            <FaBuilding className='mx-auto text-4xl text-[#aa8453] group-hover:text-white transition duration-300' />
            <h2 className='text-xl font-semibold mt-4'>Apartment</h2>
            <p className='mt-2'>For family living, find your best apartment in our directory</p>
          </div>

          {/* Card 7 */}
          <div className='bg-white p-6 text-center rounded-md shadow-md transition duration-300 hover:bg-[#aa8453] hover:text-white group'>
            <FaBuilding className='mx-auto text-4xl text-[#aa8453] group-hover:text-white transition duration-300' />
            <h2 className='text-xl font-semibold mt-4'>Condo</h2>
            <p className='mt-2'>In our directory, we have listed luxury condo for rent and sale</p>
          </div>

          {/* Card 8 */}
          <div className='bg-white p-6 text-center rounded-md shadow-md transition duration-300 hover:bg-[#aa8453] hover:text-white group'>
            <FaHotel className='mx-auto text-4xl text-[#aa8453] group-hover:text-white transition duration-300' />
            <h2 className='text-xl font-semibold mt-4'>Hotel Room</h2>
            <p className='mt-2'>The traveller people can find best hotel here for living night</p>
          </div>
        </div>
      </div>
    </div>
  );
}
