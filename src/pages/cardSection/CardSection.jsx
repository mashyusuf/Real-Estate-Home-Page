import React from 'react';
import Slider from 'react-slick';
import { FaBed, FaBath, FaRulerCombined, FaCheckCircle } from 'react-icons/fa';
import { BsFillHeartFill, BsShareFill, BsBookmarkFill } from 'react-icons/bs';

export default function CardSection() {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For devices with width less than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For devices with width less than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For devices with width less than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Fake data for the cards
  const fakeData = [
    {
      price: "$1850 (Monthly)",
      title: "Family House Residence",
      location: "4213 South Burlington, VT 05403",
      beds: 7,
      baths: 5,
      size: "1200 Sqft",
      image: "https://i.ibb.co/cNxTkBj/istockphoto-1066999762-612x612.jpg",
      type: "Apartment",
      saleType: "For Sale",
      author: "John Doe",
      time: "2 Months Ago",
    },
    {
      price: "$1450 (Monthly)",
      title: "Cozy Studio Apartment",
      location: "2345 Maple St, San Francisco, CA 94103",
      beds: 1,
      baths: 1,
      size: "500 Sqft",
      image: "https://i.ibb.co/VwB1D1y/32d4ed5c-bb49-415a-8973-04f1230b1628-0.jpg",
      type: "Apartment",
      saleType: "For Rent",
      author: "Jane Smith",
      time: "1 Week Ago",
    },
    {
      price: "$2500 (Monthly)",
      title: "Luxury Condo Downtown",
      location: "789 High St, New York, NY 10002",
      beds: 3,
      baths: 2,
      size: "1500 Sqft",
      image: "https://i.ibb.co/svszCMW/breathtaking-master-bedroom-design-with-beautiful-lighting-870x520.jpg",
      type: "Condo",
      saleType: "For Rent",
      author: "Alex Johnson",
      time: "3 Days Ago",
    },
    // More fake data...
  ];

  return (
    <div className='px-10'>
      <div className='flex justify-between mb-8'>
        <h1 className='text-5xl font-bold'>Recent Properties</h1>
        <p className='text-xl'>View All Properties</p>
      </div>
      <Slider {...settings}>
        {fakeData.map((property, index) => (
          <div key={index} className='p-4'>
            <div className='bg-white rounded-lg shadow-lg'>
              <div className='relative'>
                <img
                  src={property.image}
                  alt={property.title}
                  className='w-full h-56 object-cover rounded-t-lg'
                />
                {/* Property Sale Type Badge */}
                <span className='absolute top-2 left-2 bg-black text-white px-2 py-1 rounded'>
                  {property.saleType}
                </span>
                {/* Featured Badge */}
                <span className='absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded'>
                  Featured
                </span>
                {/* Property Type and Icons */}
                <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white flex justify-between items-center p-2'>
                  <span>{property.type}</span>
                  <div className='flex'>
                    <BsBookmarkFill className='mx-2' />
                    <BsShareFill className='mx-2' />
                    <BsFillHeartFill className='mx-2' />
                  </div>
                </div>
              </div>
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>{property.title}</h3>
                <p className='text-gray-500 mb-4'>{property.location}</p>
                <div className='flex items-center mb-4'>
                  <FaBed className='mr-2 text-gray-600' />
                  {property.beds}
                  <FaBath className='ml-4 mr-2 text-gray-600' />
                  {property.baths}
                  <FaRulerCombined className='ml-4 mr-2 text-gray-600' />
                  {property.size}
                  <FaCheckCircle className='ml-4 text-green-500' />
                </div>
                <p className='text-2xl font-bold mb-4'>{property.price}</p>
                <div className='flex items-center justify-between'>
                  <p className='flex items-center'>
                    <img
                      src="https://i.ibb.co/cNxTkBj/istockphoto-1066999762-612x612.jpg"
                      alt={property.author}
                      className='w-8 h-8 rounded-full mr-2'
                    />
                    {property.author}
                  </p>
                  <p className='text-gray-500'>{property.time}</p>
                </div>
              </div>
              <div className='p-4 border-t flex justify-between'>
                <button className='text-red-500'>
                  <BsFillHeartFill size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
