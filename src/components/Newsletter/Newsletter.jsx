import React from 'react';
import { NavLink } from 'react-router-dom';
import newsletterImg from '../../assets/newsletter-img.png';


const Newsletter = () => {
  return (
    <div className="max-w-350 mx-auto px-6 lg:px-12 relative z-10 md:-mb-95 -mb-160  mt-28">
      <div className="bg-[#11141B] rounded-4xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-5 min-h-64">

       <div className='md:w-7/12 flex w-full md:flex-row flex-col'>
          {/* Left: text content */}
          <div className=" flex flex-col justify-center gap-5 md:pl-20 py-8 px-8 md:px-0 md:pr-5">
            <span className="self-start px-4 py-1.5 rounded-full bg-white text-sm text-[#11141B] font-medium">
              Summer Sale!
            </span>
            <div className='py-4'>
              <p className="text-white text-4xl lg:text-6xl font-medium mb-4">Up To</p>
              <p className="text-[#FFEFC5] text-4xl lg:text-6xl font-medium">30% Off</p>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xl">
              Amet amet quam tincidunt faucibus eget ac porta. Dictum tristique in at est.
            </p>
            <NavLink
              to="/contact"
              className="self-start px-8 py-3 rounded-full bg-[#62826B] text-[#FFEFC5] font-medium hover:bg-[#11141B] border-2 border-[#62826B] hover:scale-105 transition-all duration-300 mt-2" >
              Get Summer Sale
            </NavLink>
          </div>

          {/* Middle: feature cards */}
          <div className=" flex flex-col justify-center gap-5 py-12 px-8 md:px-0">
              <div className="flex flex-col gap-4 border border-[#62826B] rounded-2xl p-6">
                <div className="flex items-center">
                  <h4 className="text-white font-semibold text-2xl">Community Support and Connection</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">Id massa id tortor interdum consectetur eu ultrices viverra est pellentesque.</p>
              </div>
              <div className="flex flex-col gap-4 border border-[#62826B]/40 hover:border-[#62826B] transition-all duration-300 rounded-2xl p-8">
                <div className="flex items-center">
                  <h4 className="text-white font-semibold text-2xl">Stress Reduction and Mental Clarity</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">Id massa id tortor interdum consectetur eu ultrices viverra est pellentesque.</p>
              </div>
          </div>
       </div>

        {/* Right: image */}
        <div className="hidden md:flex md:w-5/12 items-end justify-center">
          <img
            src={newsletterImg}
            alt="newsletter"
            className="w-full object-cover object-top"
          />
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
