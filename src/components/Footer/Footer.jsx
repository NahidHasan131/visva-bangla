import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#11141B] text-gray-300">
      <div className="max-w-340 mx-auto px-4 lg:px-8 py-16">
        <div className="flex md:flex-row flex-col justify-between items-center gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4 md:w-4/12 w-11/12">
            <NavLink to="/" className="flex items-center gap-2 text-4xl font-bold text-white">
              <span>🌿</span> Shunno Yoga
            </NavLink>
            <p className="font-normal leading-relaxed text-gray-300">
              Turpis ornare euismod quam odio sit. Egestas molestie eget tellus sed. Aenean enim mattis imperdiet semper erat quam. Tempor blandit elementum urna.
            </p>
            <div className="flex items-center gap-2 text-gray-300 hover:text-gray-200 duration-300 transition-colors">
              <div className='rounded-full bg-[#FFEFC5] p-2'>
                <MdOutlineEmail size={18} className="text-[#62826B]" />
              </div>
              info@shunnoyoga.com
            </div>
          </div>

          <div className='md:w-8/12 w-11/12 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-0 mt-5 md:mt-0'>
                {/* Links */}
                <div className="flex flex-col md:gap-4 gap-2">
                    <h4 className="text-white font-semibold text-lg">Links</h4>
                    <ul className="flex flex-col gap-2 text-sm text-gray-300">
                    <li><NavLink to="/" className="hover:text-white transition-colors">Home</NavLink></li>
                    <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
                    <li><NavLink to="/media" className="hover:text-white transition-colors">Media</NavLink></li>
                    <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact Us</NavLink></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold text-base">Services</h4>
                    <ul className="flex flex-col gap-2 text-sm text-gray-300">
                    <li><NavLink to="/media/audio" className="hover:text-white transition-colors">Private Yoga Sessions</NavLink></li>
                    <li><NavLink to="/media/video" className="hover:text-white transition-colors">Group Yoga Classes</NavLink></li>
                    <li><NavLink to="/media" className="hover:text-white transition-colors">Meditation Workshops</NavLink></li>
                    <li><NavLink to="/media" className="hover:text-white transition-colors">Corporate Wellness</NavLink></li>
                    </ul>
                </div>

                {/* Working Hours */}
                <div className="flex flex-col gap-4 pt-4 md:pt-0">
                    <h4 className="text-white font-semibold text-base">Working Hours</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                    Scelerisque justo et sed in purus ornare pulvinar aliquam.
                    </p>
                    <div className="flex flex-col gap-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                        <IoTimeOutline size={16} className="text-[#62826B]" />
                        Mon - Fri: 9:00AM - 6:00PM
                    </div>
                    <div className="flex items-center gap-2">
                        <IoTimeOutline size={16} className="text-[#62826B]" />
                        Sat - Sun: 8:00AM - 4:00PM
                    </div>
                    </div>
                </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-340 mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-400">
          <span>Yoga & Meditation By Shunno Yoga</span>
          <span>Copyright &copy;2026. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
