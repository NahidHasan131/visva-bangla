import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import eventLeft from '../../assets/event-left.jpg';
import eventRight from '../../assets/event-right.jpg';

const events = [
  {
    date: 'June 15-17, 2024',
    title: 'Full Moon Yoga Retreat',
    location: 'Shanty Wellness Center',
    desc: 'Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.',
    img: eventLeft,
    path: '/contact',
  },
  {
    date: 'June 15-17, 2024',
    title: 'Yoga for Beginners',
    location: 'Shanty Wellness Center',
    desc: 'Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.',
    img: eventRight,
    path: '/contact',
  },
];

const Events = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F0F7F2]">
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 bg-white">
              Our Events
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
              Upcoming Events & <br /> Workshops
            </h2>
          </div>
          <NavLink
            to="/contact" className="self-start md:self-end px-8 py-3 rounded-full font-medium bg-[#62826B] text-[#FFEFC5] hover:bg-[#11141B]  hover:scale-110 transition-all duration-300">
            All Events
          </NavLink>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((e) => (
            <div key={e.title} className="bg-white rounded-2xl p-8 flex items-center justify-between gap-4 shadow-sm">

              {/* Left content */}
              <div className="space-y-4">
                <span className="text-sm text-gray-500 bg-[#62826B]/10 px-5 py-2 rounded-full mb-7 inline-block">{e.date}</span>
                <h3 className="text-2xl font-semibold text-[#11141B]">{e.title}</h3>
                <div className="flex items-center gap-1 text-[#62826B]/50">
                  <MdLocationOn size={20} className="text-[#62826B]" />
                  {e.location}
                </div>
                <p className=" text-gray-400 leading-relaxed">{e.desc}</p>
                <NavLink to={e.path}
                  className="self-start font-medium text-[#62826B] underline underline-offset-4 hover:text-[#62826B]/70 transition-colors duration-300 mt-6" >
                  Reserve Your Spot
                </NavLink>
              </div>

              {/* Right image */}
              <img
                src={e.img}
                alt={e.title}
                className="w-50 h-73 object-cover rounded-xl md:block hidden"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
