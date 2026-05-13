import React from 'react';
import heroMedium from '../../assets/hero-medium.jpg';

const AboutVision = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F0F7F2]">
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">
                Our Vision
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
                The Purpose Behind Shunno Yoga
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 flex flex-col gap-1">
                <span className="text-4xl font-bold text-[#11141B]">100 +</span>
                <span className="text-sm text-gray-500">Online Classes Available</span>
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col gap-1">
                <span className="text-4xl font-bold text-[#11141B]">49 K+</span>
                <span className="text-sm text-gray-500">Community Members</span>
              </div>
            </div>

            {/* Vision statement */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#11141B] rounded-2xl px-6 py-4">
                <span className="text-white font-semibold text-lg">Our Vision</span>
              </div>
              <div className="bg-white rounded-2xl px-6 py-5">
                <p className="text-gray-500 text-sm leading-relaxed italic">
                  "To create a serene sanctuary where individuals can explore and nurture their physical, mental, and spiritual well-being through the transformative practices of yoga and meditation."
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:w-1/2">
            <img
              src={heroMedium}
              alt="Our vision"
              className="w-full h-125 object-cover rounded-3xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVision;
