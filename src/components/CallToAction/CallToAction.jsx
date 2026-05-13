import React from 'react';
import { NavLink } from 'react-router-dom';
import meditationImg from '../../assets/meditation-img.jpg';

const CallToAction = () => {
  return (
    <section
      className="relative py-18 lg:py-26 mb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${meditationImg})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#11141B]/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 px-4">
        <span className="px-5 py-2 rounded-full bg-white text-sm text-[#11141B] font-medium">
          Join the Shanty Wellness Journey
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
          Start Your Yoga and Meditation Practice Today!
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed max-w-md">
          Tristique posuere bibendum id auctor pellentesque. Donec diam blandit vitae quam. In donec ac dignissim rhoncus sodales porttitor.
        </p>
        <NavLink to="/contact" className="px-8 py-3 rounded-full bg-[#62826B] text-[#FFEFC5] hover:bg-[#11141B] font-medium hover:opacity-80 hover:scale-110 transition-all duration-300">
          Try a Free Class
        </NavLink>
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-100 text-sm">or</span>
          <NavLink to="/media" className="text-[#FFEFC5] text-sm underline underline-offset-4">
            <span className='hover:text-[#62826B] transition-colors duration-300'>Explore Membership Options</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
