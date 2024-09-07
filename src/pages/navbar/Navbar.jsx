import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClickOutside = (e) => {
    if (!e.target.closest('.navbar')) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust this value as needed
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = (
    <>
      {['Home', 'Listing', 'Features', 'Pages', 'Blog'].map((item, index) => (
        <li
          key={index}
          className={`relative border-b border-gray-600 last:border-0 ${openIndex === index ? 'text-[#aa8453]' : 'hover:text-[#aa8453]'}`}
        >
          <div
            className="flex items-center cursor-pointer text-white font-medium py-2"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {item}
            <FaPlus className="ml-2" />
          </div>
          {openIndex === index && (
            <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg z-10 p-2 text-black">
              <li className="hover:text-[#aa8453]"><a>{item} 01</a></li>
              <li className="hover:text-[#aa8453]"><a>{item} 02</a></li>
            </ul>
          )}
        </li>
      ))}
      <li className="text-white font-medium py-2 border-b border-gray-600 hover:text-[#aa8453]"><a>Contact Us</a></li>
    </>
  );

  return (
    <div className={`navbar ${isScrolled ? 'py-4 px-6' : 'py-14 px-10'} top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'fixed bg-gray-800' : 'absolute bg-transparent'}`}>
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        <a href="/" className="text-white text-xl font-bold">UNILAND <br /> <span className='text-sm'>REAL ESTATE</span></a>
      </div>

      {/* Navbar Center for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex space-x-6">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        {/* Create Listing Button */}
        <a className="btn border-0 text-white btn-warning bg-[#aa8453] hover:bg-[#cc7f1a] flex items-center hidden lg:flex">
          <GoPlus className="mr-2" />
          Create Listing
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden relative pr-10">
          <button className="btn btn-ghost" onClick={handleMenuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Half-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-y-0 left-0 w-1/2 bg-black bg-opacity-90 text-white z-50 flex flex-col items-start p-6">
          <button
            className="text-white text-2xl focus:outline-none mb-4"
            onClick={handleMenuToggle}
          >
            &times;
          </button>
          <a href="/" className="text-white text-sm font-bold mb-8">UNILAND<br />REAL ESTATE</a>
          <ul className="space-y-4 text-sm font-medium">
            {navLinks}
            <li className="pt-4">
              <a className="btn border-0 text-white btn-warning bg-[#aa8453] hover:bg-[#cc7f1a] flex items-center">
                <GoPlus className="mr-2" />
                Create Listing
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
