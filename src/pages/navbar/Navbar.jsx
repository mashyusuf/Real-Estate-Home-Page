import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';


export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClickOutside = (e) => {
    // Close submenu if click is outside the menu
    if (!e.target.closest('.navbar')) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const navLinks = (
    <>
      <li className={`relative ${openIndex === 0 ? 'text-[#aa8453]' : 'hover:text-[#aa8453]'}`}>
        <div
          className="flex items-center cursor-pointer text-white font-semibold"
          onMouseEnter={() => handleMouseEnter(0)}
        >
          Home
          <FaPlus className="ml-2" />
        </div>
        {openIndex === 0 && (
          <ul className="absolute left-0 top-full mt-2 bg-base-100 shadow-lg z-10 p-2 text-black">
            <li className="hover:text-[#aa8453]"><a>Home 01</a></li>
            <li className="hover:text-[#aa8453]"><a>Home 02</a></li>
          </ul>
        )}
      </li>
      <li className={`relative ${openIndex === 1 ? 'text-[#aa8453]' : 'hover:text-[#aa8453]'}`}>
        <div
          className="flex items-center cursor-pointer text-white font-semibold"
          onMouseEnter={() => handleMouseEnter(1)}
        >
          Listing
          <FaPlus className="ml-2" />
        </div>
        {openIndex === 1 && (
          <ul className="absolute left-0 top-full mt-2 bg-base-100 shadow-lg z-10 p-2 text-black">
            <li className="hover:text-[#aa8453]"><a>Property Grid</a></li>
            <li className="hover:text-[#aa8453]"><a>Property List</a></li>
          </ul>
        )}
      </li>
      <li className={`relative ${openIndex === 2 ? 'text-[#aa8453]' : 'hover:text-[#aa8453]'}`}>
        <div
          className="flex items-center cursor-pointer text-white font-semibold"
          onMouseEnter={() => handleMouseEnter(2)}
        >
          Features
          <FaPlus className="ml-2" />
        </div>
        {openIndex === 2 && (
          <ul className="absolute left-0 top-full mt-2 bg-base-100 shadow-lg z-10 p-2 text-black">
            <li className="hover:text-[#aa8453]"><a>Single Property</a></li>
            <li className="hover:text-[#aa8453]"><a>Left Filter Search</a></li>
          </ul>
        )}
      </li>
      <li className={`relative ${openIndex === 3 ? 'text-[#aa8453]' : 'hover:text-[#aa8453]'}`}>
        <div
          className="flex items-center cursor-pointer text-white font-semibold"
          onMouseEnter={() => handleMouseEnter(3)}
        >
          Pages
          <FaPlus className="ml-2" />
        </div>
        {openIndex === 3 && (
          <ul className="absolute left-0 top-full mt-2 bg-base-100 shadow-lg z-10 p-2 text-black">
            <li className="hover:text-[#aa8453]"><a>About Us</a></li>
            <li className="hover:text-[#aa8453]"><a>Profile</a></li>
          </ul>
        )}
      </li>
      <li className={`relative ${openIndex === 4 ? 'text-[#aa8453]' : 'hover:text-[#aa8453]'}`}>
        <div
          className="flex items-center cursor-pointer text-white font-semibold"
          onMouseEnter={() => handleMouseEnter(4)}
        >
          Blog
          <FaPlus className="ml-2" />
        </div>
        {openIndex === 4 && (
          <ul className="absolute left-0 top-full mt-2 bg-base-100 shadow-lg z-10 p-2 text-black">
            <li className="hover:text-[#aa8453]"><a>Blog Grid</a></li>
            <li className="hover:text-[#aa8453]"><a>Blog List</a></li>
          </ul>
        )}
      </li>
      <li className="text-white font-semibold"><a>Contact Us</a></li>
    </>
  );

  return (
    <div className="navbar bg-transparent absolute py-14 px-10 top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <a href="" className="text-white text-xl font-semibold">UNILAND <br />REAL ESTATE</a>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn border-0 text-white btn-warning bg-[#aa8453] hover:bg-[#cc7f1a]">
          <GoPlus className="mr-2" />
          Create Listing
        </a>
      </div>
    </div>
  );
}
