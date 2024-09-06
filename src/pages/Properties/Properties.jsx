import React from 'react'
import { CgDollar } from "react-icons/cg";
export default function Properties() {
  return (
    <div className='md:flex grid max-w-7xl mx-auto space-x-10 justify-center mb-28'>
        <div className='flex space-x-8 text-center mb-5'>
            <p className='flex items-center text-5xl text-[#aa8453] font-bold'><CgDollar />
            15.4M</p>
           <div>
            <p>Owned from</p>
            <p>Properties Transactions</p>
           </div>
        </div>
        <div className='flex space-x-8 text-center mb-5'>
            <p className='flex items-center text-5xl text-[#aa8453] font-bold'><CgDollar />
            25K+</p>
           <div>
            <p>Owned from</p>
            <p>Properties Transactions</p>
           </div>
        </div>
        <div className='flex space-x-8'>
            <p className='flex items-center text-5xl text-[#aa8453] font-bold'><CgDollar />
            500</p>
           <div>
            <p>Owned from</p>
            <p>Properties Transactions</p>
           </div>
        </div>
    </div>
  )
}
