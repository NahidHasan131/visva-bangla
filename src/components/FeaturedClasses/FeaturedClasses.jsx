import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoTimeOutline } from 'react-icons/io5';
import { PiStackLight } from 'react-icons/pi';
import morningYoga from '../../assets/morningYoga.jpg';
import meditation from '../../assets/meditation.jpg';
import powerYoga from '../../assets/powerYoga.jpg';

const classes = [
  {
    img: morningYoga,
    level: 'Beginner',
    duration: '30 minutes',
    title: 'Morning Yoga Flow',
    members: '164+ Members',
    desc: 'Consectetur eu ultrices viverra est aliquet pellentesque potenti.',
    path: '/media',
  },
  {
    img: meditation,
    level: 'Intermediate',
    duration: '20 minutes',
    title: 'Meditation Stress Relief',
    members: '164+ Members',
    desc: 'Consectetur eu ultrices viverra est aliquet pellentesque potenti.',
    path: '/media/video',
  },
  {
    img: powerYoga,
    level: 'Advanced',
    duration: '45 minutes',
    title: 'Power Yoga for Strength',
    members: '164+ Members',
    desc: 'Consectetur eu ultrices viverra est aliquet pellentesque potenti.',
    path: '/media/audio',
  },
];

const FeaturedClasses = () => {
  return (
    <section className="py-16 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, #2d4a3e 0%, #3d6b55 40%, #4a7a62 70%, #2a4a3a 100%)',
      }}>
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <span className="self-start px-5 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
              Featured Classes
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-xl">
              Explore Our Top Yoga & <br /> Meditation Classes
            </h2>
          </div>
          <NavLink to="/media" className="self-start md:self-end px-8 py-3 rounded-full font-medium bg-[#11141B] text-[#FFEFC5] hover:bg-[#11141B]/80% hover:scale-110 transition-all duration-300">
            All Classes
          </NavLink>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((cls) => (
            <div key={cls.title} className="bg-white  border-2 border-white rounded-2xl overflow-hidden flex flex-col">

              {/* Image */}
              <img src={cls.img} alt={cls.title} className="w-full h-56 object-cover" />

              {/* Content */}
              <div className="p-6 flex flex-col gap-5 flex-1">

                {/* Level + Duration */}
                <div className="flex items-center gap-4 font-semibold text-[#62826B]/60">
                  <span className="flex items-center gap-1">
                    <PiStackLight size={20} className="text-[#62826B]" />
                    {cls.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <IoTimeOutline size={20} className="text-[#62826B]" />
                    {cls.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold py-2 text-[#11141B]">{cls.title}</h3>

                {/* Members */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    <img src={morningYoga} alt="m" className="w-9 h-9 rounded-full object-cover border-2 border-white" />
                    <img src={meditation} alt="m" className="w-9 h-9 rounded-full object-cover border-2 border-white" />
                  </div>
                  <span className="text-[#62826B]/70">{cls.members}</span>
                </div>

                {/* Description */}
                <p className="font-normal text-gray-500 leading-relaxed flex-1">{cls.desc}</p>

                {/* Button */}
                <NavLink to={cls.path} className="mt-2 w-9/10 mx-auto text-center py-2.5 rounded-full border border-gray-200 font-medium text-[#62826B]/80 hover:bg-[#11141B] hover:text-[#FFEFC5] hover:scale-110 transition-all duration-300">
                  Start Class
                </NavLink>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedClasses;
