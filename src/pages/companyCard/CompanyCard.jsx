import React from 'react';
import img1 from '../../assets/1 (1).png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/3 (1).png';
import { FaPlus } from 'react-icons/fa'; // Import the '+' icon from React Icons

const cardData = [
  {
    id: 1,
    img: img1,
    title: 'Our latest development projects by more efficie.',
    description: 'Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.',
    name: 'By Robert Haven ',
    date: ' Dec 25, 2019',
  },
  {
    id: 2,
    img: img2,
    title: 'Cultivating market leadership from the inside.',
    description: 'Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.',
    name: 'By Robert Haven ',
    date: ' Dec 25, 2019',
  },
  {
    id: 3,
    img: img3,
    title: 'We are the next generation of the advertising.',
    description: 'Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.',
    name: 'By Robert Haven ',
    date: ' Dec 25, 2019',
  }
];

export default function CompanyCard() {
  return (
    <div className='px-4 py-8'>
      <div className='text-center mb-8'>
        <p className='text-xl text-[#aa8453]'>Our Recent Post</p>
        <h1 className='text-4xl font-bold text-black mb-4'>
          Publish What We Think, About Our
        </h1>
        <h1 className='text-4xl font-bold text-black'>
          Company Activities
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {cardData.map((card) => (
          <div key={card.id} className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
            <div className='relative'>
              <img 
                src={card.img} 
                alt='Image not found!' 
                className='w-full h-48 object-cover mb-4 rounded transition-transform transform hover:scale-105' 
              />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity'>
                <FaPlus className='text-3xl text-white bg-[#aa8453] p-2 rounded-full' />
              </div>
            </div>
            <h2 className='text-xl font-bold text-black mb-4 hover:text-[#aa8453] transition-colors'>
              {card.title}
            </h2>
            <p className='text-gray-600 mb-6'>
              {card.description}
            </p>
            <div className='flex items-center space-x-5'>
              <p className='text-[#b97e30] font-bold text-sm'>{card.name}</p>
              <p className='text-[#af7d3b] font-bold text-sm'>{card.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
