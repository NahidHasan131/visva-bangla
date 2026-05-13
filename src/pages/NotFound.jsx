import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F7F2] px-4">
      <div className="flex flex-col items-center text-center gap-6">

        {/* Big 404 */}
        <h1 className="text-[10rem] lg:text-[14rem] font-bold leading-none text-[#62826B]/15 select-none">
          404
        </h1>

        <div className="flex flex-col items-center gap-3 -mt-10">
          <span className="text-3xl">🌿</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#11141B]">Page Not Found</h2>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Looks like this path leads nowhere. Let's get you back to your wellness journey.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <NavLink
            to="/"
            className="px-6 py-3 rounded-full bg-[#62826B] text-[#FFEFC5] font-medium hover:bg-[#11141B] transition-colors duration-300"
          >
            Back to Home
          </NavLink>
          <NavLink
            to="/contact"
            className="px-6 py-3 rounded-full border border-[#62826B] text-[#62826B] font-medium hover:bg-[#62826B] hover:text-[#FFEFC5] transition-all duration-300"
          >
            Contact Us
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
