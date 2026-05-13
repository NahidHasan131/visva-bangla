import React from 'react';
import { NavLink } from 'react-router-dom';
import trainer1 from '../../assets/trainer-1.jpg';
import trainer2 from '../../assets/trainer-2.jpg';
import trainer3 from '../../assets/trainer-3.jpg';

const trainers = [
  {
    img: trainer1,
    tags: ['Hatha Yoga', 'Vinyasa Flow'],
    name: 'Emily Johnson',
    experience: '10+ years',
    level: 'All Levels',
    path: '/about/trainer',
  },
  {
    img: trainer2,
    tags: ['Power Yoga', 'Strength Training'],
    name: 'Michael Roberts',
    experience: '8+ years',
    level: 'Intermediate to Advanced',
    path: '/about/trainer',
  },
  {
    img: trainer3,
    tags: ['Mindfulness Meditation'],
    name: 'Sarah Thompson',
    experience: '6+ years',
    level: 'All Levels',
    path: '/about/trainer',
  },
];

const Trainers = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-15">
          <span className="px-4 py-1.5 rounded-full border border-gray-300 text-gray-800">
            Our Trainer
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] text-center">
            Meet Our Expert Trainers
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t) => (
            <div key={t.name} className="flex flex-col gap-4 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">

              {/* Image with tags */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img src={t.img} alt={t.name} className="w-full h-90 object-cover" />
                <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-[#11141B] backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 px-8">
                <h3 className="text-2xl font-semibold text-[#11141B]">{t.name}</h3>
                <p className="text-gray-700 py-4 border-b font-medium border-gray-200">
                  Experience: <span className="font-semibold text-[#62826B]">{t.experience}</span>
                </p>
                <p className="font-medium py-2 text-gray-700">
                  Level: <span className="font-semibold text-[#62826B]">{t.level}</span>
                </p>
              </div>

              {/* Button */}
              <NavLink
                to={t.path}
                className="m-8 mt-1 text-center py-3 px-6 rounded-full bg-[#62826B]/15 border border-[#62826B] text-[#62826B] font-medium  hover:bg-[#11141B] hover:border-[#11141B] hover:text-[#FFEFC5] hover:scale-105 transition-all duration-300"
              >
                Learn More About {t.name.split(' ')[0]}
              </NavLink>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;
