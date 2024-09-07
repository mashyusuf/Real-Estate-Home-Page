import React, { useState, useEffect } from 'react';

export default function Count() {
  // State for each number to animate the count
  const [listedProperty, setListedProperty] = useState(0);
  const [megaProject, setMegaProject] = useState(0);
  const [awardsWon, setAwardsWon] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  // Helper function to animate the number counting
  const animateCount = (setNumber, finalValue, duration) => {
    let start = 1;
    const increment = finalValue / (duration / 20); // Dividing final value by the duration

    const counter = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        clearInterval(counter);
        setNumber(finalValue); // Set the final value once counting is done
      } else {
        setNumber(Math.ceil(start)); // Update the state to the nearest integer
      }
    }, 20); // Update every 20ms
  };

  useEffect(() => {
    // Animate each number with a slight delay
    animateCount(setListedProperty, 310, 2000); // Count to 310 in 2 seconds
    animateCount(setMegaProject, 51, 2000); // Count to 51 in 2 seconds
    animateCount(setAwardsWon, 25, 2000); // Count to 25 in 2 seconds
    animateCount(setHappyClients, 2130, 2000); // Count to 2130 in 2 seconds
  }, []);

  return (
    <div className='bg-slate-800 max-w-7xl mx-auto mt-20 mb-20 rounded-md py-12'>
      <div className='grid gap-8 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {/* First Block */}
        <div>
          <p className='text-4xl font-bold text-[#aa8453]'>{listedProperty}</p>
          <p className='text-xl font-bold text-white mt-2'>Listed Property</p>
        </div>

        {/* Second Block */}
        <div>
          <p className='text-4xl font-bold text-[#aa8453]'>{megaProject}</p>
          <p className='text-xl font-bold text-white mt-2'>Mega Project</p>
        </div>

        {/* Third Block */}
        <div>
          <p className='text-4xl font-bold text-[#aa8453]'>{awardsWon}</p>
          <p className='text-xl font-bold text-white mt-2'>Awards Won</p>
        </div>

        {/* Fourth Block */}
        <div>
          <p className='text-4xl font-bold text-[#aa8453]'>{happyClients}</p>
          <p className='text-xl font-bold text-white mt-2'>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}
