import React from 'react';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';

export default function AgentsList() {
  const Data = [
    {
      name: 'Luann McLawhorn',
      score: '4.50',
      date: '1st April, 2012',
      img: image1
    },
    {
      name: 'Ronald Johnson',
      score: '5.00',
      date: '1st April, 2012',
      img: image2
    },
    {
      name: 'John M. Riddle',
      score: '5.00',
      date: '1st April, 2012',
      img: image3
    },
    {
      name:'Sarah Johnson',
      score:'4.00',
      date:'1st April, 2012',
      img: image4
    },
  ];

  return (
    <div className="mt-20 mb-10 px-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold text-black">Our Listed Property Agents</h1>
        <p className="text-left text-gray-700 cursor-pointer hover:underline">View All Agents</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {Data.map((agent, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img src={agent.img} alt={agent.name} className="w-full h-48 object-cover" />
            <div className="p-6 relative">
              <div className="flex justify-between items-center mb-2 space-x-2">
                <h2 className="text-lg font-bold text-gray-800">{agent.name}</h2>

                {/* Score with triangular design */}
                <div className="relative bg-[#aa8453] text-white py-1 px-3 rounded flex items-center text-sm">
                  {/* Triangle design */}
                  <div className="absolute -left-3 top-0 h-full flex items-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#aa8453]"></div>
                  </div>
                  <span className="ml-3">Score: {agent.score}</span>
                </div>
              </div>

              {/* Date Below Name and Score */}
              <p className="text-gray-500 mt-2">{agent.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
