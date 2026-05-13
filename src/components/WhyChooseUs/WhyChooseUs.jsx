import React from 'react';
import { GiMeditation } from 'react-icons/gi';
import { BiAward } from 'react-icons/bi';
import { MdGroups } from 'react-icons/md';
import WhyChoose from '../../assets/why-choose-us.jpg';
import WhyChooseSmall from '../../assets/why-choose-small.jpg';
import Newsletter from '../Newsletter/Newsletter';

const features = [
  {
    icon: <BiAward size={20} className="text-white" />,
    title: 'Experienced Instructors',
    desc: 'Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.',
  },
  {
    icon: <GiMeditation size={20} className="text-white" />,
    title: 'Comprehensive Class Offerings',
    desc: 'Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.',
  },
  {
    icon: <MdGroups size={20} className="text-white" />,
    title: 'Community and Support',
    desc: 'Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 pb-32 bg-[#F0F7F2] overflow-visible">
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-20 items-center">

          {/* Left: images + stat */}
          <div className="md:w-1/2 flex flex-col gap-5">

            {/* Top image */}
            <img
              src={WhyChoose}
              alt="yoga session"
              className="w-full h-107 object-cover rounded-2xl"
            />

            {/* Bottom: small image + stat card */}
            <div className="flex gap-6  flex-col md:flex-row">
              <img
                src={WhyChooseSmall}
                alt="yoga pose"
                className="md:w-93 w-full h-57 object-cover rounded-2xl"
              />
              <div className="w-full bg-white rounded-2xl flex flex-col justify-center items-center p-8 gap-4">
                <span className="md:text-5xl text-4xl font-bold text-[#11141B]">10 K+</span>
                <span className=" text-gray-500 leading-snug">Meditation <br /> Hours Logged</span>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="md:w-1/2 flex flex-col gap-8">

            {/* Badge + heading */}
            <div className="flex flex-col gap-4">
              <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 bg-white">
                Why Choose Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight mb-4">
                The Shunno Yoga: Your Path to Inner Peace
              </h2>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-13 h-13 shrink-0 rounded-full bg-white flex items-center justify-center">
                    <span className="p-1 bg-[#62826B] rounded-full">{f.icon}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#11141B]">{f.title}</h3>
                    <p className=" text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <Newsletter />
    </section>
  );
};

export default WhyChooseUs;
