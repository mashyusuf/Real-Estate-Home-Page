import React, { useState, useEffect, useRef } from 'react';
import image1 from '../../assets/1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/3.png';
import { FaLocationArrow, FaEllipsisV, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import './app.css';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([100000, 500000]);
  const [isHovered, setIsHovered] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const slides = [
    {
      image: image1,
      text: "Amazing House Architect",
      description: "Looking for your dream house or property? Search here and select your best one from more than 1 million listings.",
      buttonText: "Preview Listing",
      textPosition: "center",
    },
    {
      image: image2,
      text: "Find Your Perfect Home",
      description: "Discover properties in your preferred location. Filter by price, property type, and more.",
      buttonText: "Start Search",
      textPosition: "center",
    },
    {
      image: image3,
      text: "Best Deals on Real Estate",
      description: "Explore the best offers on houses, apartments, and lands in your area.",
      buttonText: "Explore Offers",
      textPosition: "left",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const newSlide = (prevSlide + 1) % slides.length;
        // Reset animation step when changing slide
        setAnimationStep(0);
        return newSlide;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (priceRef.current && !priceRef.current.contains(event.target)) {
        setIsPriceOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const priceRef = useRef(null);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const newSlide = (prevSlide + 1) % slides.length;
      // Reset animation step when changing slide
      setAnimationStep(0);
      return newSlide;
    });
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => {
      const newSlide = (prevSlide - 1 + slides.length) % slides.length;
      // Reset animation step when changing slide
      setAnimationStep(0);
      return newSlide;
    });
  };

  useEffect(() => {
    // Animation delay handling
    const timer = setTimeout(() => {
      setAnimationStep(1); // Start revealing text after 1.5s
    }, 1500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Images */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            {/* Text and Button */}
            <div className={`absolute ${slide.textPosition === 'center' ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'top-1/3 left-10'} text-white text-center`}>
              <h2 className={`text-5xl font-bold mb-4 ${animationStep === 1 ? "reveal-text" : "hide-text"} text-anim`}>{slide.text}</h2>
              <p className={`text-lg mb-6 ${animationStep === 1 ? "reveal-text" : "hide-text"} text-anim`}>{slide.description}</p>
              <button className={`bg-[#aa8453] hover:bg-[#8d6e63] text-white font-bold py-2 px-6 rounded-lg ${animationStep === 1 ? "reveal-text" : "hide-text"} text-anim`}>{slide.buttonText}</button>
            </div>
          </div>
        ))}
        
        {/* Left Arrow (shown on hover) */}
        <button
          onClick={goToPreviousSlide}
          className={`absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-transparent border-4 border-white p-3 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} box-border`}
        >
          <FaArrowLeft size={30} />
        </button>

        {/* Right Arrow (shown on hover) */}
        <button
          onClick={goToNextSlide}
          className={`absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-transparent border-4 border-white p-3 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} box-border`}
        >
          <FaArrowRight size={30} />
        </button>
      </div>

      {/* Search Box and Advanced Options */}
      <div className='px-10'>
        <div className="relative py-10 pb-10 w-full bg-white p-4 rounded-lg shadow-lg mt-4 sm:mt-0 md:mt-[-160px] lg:mt-[-160px]">
          <div className="flex flex-col gap-4 md:flex-row md:gap-4 lg:gap-6 lg:justify-between">
            <input 
              type="text" 
              placeholder="Enter Keyword..." 
              className="w-full md:w-1/4 p-2 border border-gray-300 rounded-lg text-sm" 
            />
            <select 
              className="w-full md:w-1/4 p-2 border border-gray-300 rounded-lg text-sm"
            >
              <option>Property Types</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Land</option>
            </select>
            <div className="relative w-full md:w-1/4" ref={priceRef}>
              <button
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg w-full text-left text-sm"
              >
                <span>Price</span>
                {isPriceOpen ? <BiCaretUp className="ml-auto" /> : <BiCaretDown className="ml-auto" />}
              </button>
              {isPriceOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg p-4 flex flex-col gap-2">
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full md:w-1/4">
              <button
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg w-full text-left text-sm"
              >
                <FaEllipsisV className="text-xl" />
                <span>Advanced Search</span>
                {isAdvancedOpen ? <BiCaretUp className="ml-auto" /> : <BiCaretDown className="ml-auto" />}
              </button>
              {isAdvancedOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg p-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Air Conditioning', 'Pool', 'Gym', 'Parking', 'Garden', 'Pet Friendly', 'Fireplace', 'Balcony', 'Security', 'Washer/Dryer', 'Internet', 'Heating', 'Elevator', 'Laundry', 'Storage', 'Dishwasher'].map(option => (
                      <label key={option} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="form-checkbox" />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full md:w-1/4">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg w-full text-left text-sm"
              >
                <FaLocationArrow className="text-xl" />
                <span>Location</span>
                {isLocationOpen ? <BiCaretUp className="ml-auto" /> : <BiCaretDown className="ml-auto" />}
              </button>
              {isLocationOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg p-4">
                  <input
                    type="text"
                    placeholder="Enter location..."
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              )}
            </div>
            <button className="bg-[#aa8453] hover:bg-[#8d6e63] text-white font-bold py-2 px-6 rounded-lg text-sm w-full sm:w-full md:w-full lg:w-auto self-center md:self-auto">
  Search
</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
