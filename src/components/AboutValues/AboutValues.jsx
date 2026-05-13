import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutImg from '../../assets/about-img.jpg';

const values = [
  {
    num: '01.',
    title: 'Inclusivity',
    desc: 'Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.',
  },
  {
    num: '02.',
    title: 'Integrity',
    desc: 'Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.',
  },
  {
    num: '03.',
    title: 'Community',
    desc: 'Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.',
  },
];

const AboutValues = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left image */}
          <div className="lg:w-2/5">
            <img
              src={aboutImg}
              alt="Our values"
              className="w-full h-112 object-cover rounded-3xl"
            />
          </div>

          {/* Right content */}
          <div className="lg:w-3/5 flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">
                Our Value
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
                Our Commitment to Excellence
              </h2>
            </div>

            <div className="flex flex-col">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`flex items-start gap-6 py-5 ${i < values.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <span className="text-lg font-semibold text-[#62826B] shrink-0 w-6">{v.num}</span>
                  <span className="font-bold text-xl text-[#11141B] shrink-0 w-25">{v.title}:</span>
                  <p className=" text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            <NavLink
              to="/contact"
              className="self-start px-8 py-3 rounded-full bg-[#62826B] text-[#FFEFC5] font-medium hover:bg-[#11141B] transition-colors duration-300"
            >
              Learn More
            </NavLink>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutValues;
