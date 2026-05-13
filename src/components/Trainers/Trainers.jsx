import { NavLink } from 'react-router-dom';
import { LuMapPin } from 'react-icons/lu';
import trainerImg from '../../assets/Trainer1.jpeg';

const trainers = [
  {
    img: trainerImg,
    name: 'Dr. S. M. Hasib Ul Hasan',
    designation: 'Researcher & Proposer',
    location: 'Rajshahi, Bangladesh',
    path: '/contact',
  },
  {
    img: trainerImg,
    name: 'Dr. S. M. Hasib Ul Hasan',
    designation: 'Researcher & Proposer',
    location: 'Rajshahi, Bangladesh',
    path: '/about/trainer',
  },
  {
    img: trainerImg,
    name: 'Dr. S. M. Hasib Ul Hasan',
    designation: 'Researcher & Proposer',
    location: 'Rajshahi, Bangladesh',
    path: '/about/trainer',
  },
];

const Trainers = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#f7f8fa]">
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-14 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
            Our Guides
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">
            Meet Our <span className="text-secondary">Spiritual Guides</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {trainers.map((t, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden h-90">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-fit-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3 p-6">
                <div>
                  <h3 className="text-lg font-bold text-[#11141B]">{t.name}</h3>
                  <p className="text-sm text-secondary font-medium mt-0.5">{t.designation}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <LuMapPin size={13} className="text-secondary shrink-0" />
                  {t.location}
                </div>
                <NavLink
                  to={t.path}
                  className="mt-1 text-center py-2.5 rounded-xl border border-secondary text-secondary text-sm font-semibold hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  View Profile
                </NavLink>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;
