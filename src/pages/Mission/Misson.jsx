import React from 'react'
import { MdDone } from "react-icons/md";
export default function Misson() {
  return (
    <div>

        <div className=' lg:flex grid md:grid-cols-3 mt-20 max-w-7xl mx-auto space-x-10 justify-center mb-10'>
            <div className='text-5xl text-center text-black font-bold mb-5'>Our mission is to <br /> redefine real  <br />estate for the <br /> customer's
</div>
            <div  className='mb-5'>
                <p className='text-sm'>Finderland is one of the world's leading property agents.</p>  <p className='text-sm mt-3'> Our experience spans the globe.</p>
                <p className='text-sm mt-3' >We have been advising on buying, selling and renting </p> <p  className='text-sm mt-3'> property for over 160 years, from country cottages to city </p> <p className='text-sm mt-3' >centre offices, agricultural land to new-build developments.</p> 
            </div>
            <div className=''>
    <p className='flex items-center text-sm mr-5 mt-3'> 
        <span className='text-[#aa8453] mr-5'><MdDone /></span>
        Only pay when you publish
    </p>
    <p className='flex items-center text-sm mr-5 mt-3'> 
        <span className='text-[#aa8453] mr-5'><MdDone /></span>
        Full featured event app
    </p>
    <p className='flex items-center text-sm mr-5 mt-3'> 
        <span className='text-[#aa8453] mr-5'><MdDone /></span>
        Unlimited featured use
    </p>
    <p className='flex items-center text-sm mr-5 mt-3'> 
        <span className='text-[#aa8453] mr-5'><MdDone /></span>
        24/7 supports
    </p>
    <p className='flex items-center text-sm mr-5 mt-3'> 
        <span className='text-[#aa8453] mr-5'><MdDone /></span>
        Event analytics
    </p>
</div>

        </div>
    </div>
  )
}
