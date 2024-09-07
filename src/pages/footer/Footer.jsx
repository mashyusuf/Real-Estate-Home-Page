import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Flex Container */}
        <div className="flex space-x-10 flex-col md:flex-row justify-between">
          {/* First Line: UniLAnd */}
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold mb-2">UniLAnd</h1>
            <p>
              Risus commodo congue augue phas ellus morbi hymenaeos ante tincidu eu orci dictum bibe ndum lacus pla tea primis mi lacinia
            </p>
          </div>

          {/* Second Line: Contact Info */}
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <p className="flex items-center mb-2">
              <MdPhone className="mr-2" />
              +1 246-345-0695
            </p>
            <p className="flex items-center mb-2">
              <IoMdMail className="mr-2" />
              helpline@homex.com
            </p>
            <p>Unicoder Design Agency</p>
            <p>301 The Greenhouse, Custard Factory, London, E3 8DY</p>
          </div>

          {/* Third Line: Quick Links */}
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Our Services</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Investment Solution</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Frequently Asked Questions</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">How It Works</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Become a Member</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Appointment</a></li>
            </ul>
          </div>

          {/* Fourth Line: Appointment */}
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
            </div>
            <button className="bg-[#aa8453] text-white py-2 px-4 rounded hover:bg-[#8c6a46]">
              Register
            </button>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p>© 2022 Uniland All rights reserved</p>
          <p className="mt-2">
            <a href="#" className="text-white hover:underline">Privacy & Policy</a> | 
            <a href="#" className="text-white hover:underline"> Site Map</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
