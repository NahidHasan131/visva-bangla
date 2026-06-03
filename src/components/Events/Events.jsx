import { NavLink } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeIn, fadeUp, staggerContainer, viewport } from '../../lib/motion';
import eventLeft from '../../assets/event-left.jpg';
import eventRight from '../../assets/event-right.jpg';

const events = [
  {
    date: 'Every Friday',
    title: 'Free Weekly Meditation Session',
    location: 'Bishwabangla Foundation, Rajshahi',
    desc: 'Join our weekly free meditation and spiritual education session open to all — regardless of religion, class, or background.',
    img: eventLeft,
    path: '/contact',
  },
  {
    date: 'Every Saturday',
    title: 'Sufi Philosophy & Spiritual Class',
    location: 'Bishwabangla Foundation, Rajshahi',
    desc: 'Weekly thematic classes on humanitarian philosophy, Sufi wisdom, and spiritual knowledge — simplified for all seekers.',
    img: eventRight,
    path: '/contact',
  },
];

const Events = () => {
  return (
    <motion.section
      className="py-16 lg:py-24 bg-[#f7f8fa]"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div className="flex flex-col gap-3"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
              Our Programs
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
              Upcoming Events &<br />
              <span className="text-secondary">Weekly Programs</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
            <NavLink to="/contact"
              className="self-start md:self-end px-7 py-3 rounded-full text-sm font-semibold bg-secondary text-white hover:bg-secondary/90 transition-all duration-300">
              All Events
            </NavLink>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer()} initial="hidden" whileInView="show" viewport={viewport}
        >
          {events.map((e) => (
            <motion.div key={e.title} variants={fadeUp}
              className="bg-white rounded-2xl p-8 flex items-center justify-between gap-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-shadow duration-300">

              {/* Left content */}
              <div className="flex flex-col gap-3">
                <span className="self-start text-xs font-semibold text-secondary bg-secondary/10 px-4 py-1.5 rounded-full">
                  {e.date}
                </span>
                <h3 className="text-xl font-bold text-[#11141B]">{e.title}</h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-400">
                  <MdLocationOn size={16} className="text-secondary shrink-0" />
                  {e.location}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{e.desc}</p>
                <NavLink to={e.path}
                  className="self-start text-sm font-semibold text-secondary underline underline-offset-4 hover:text-secondary/70 transition-colors duration-300">
                  Reserve Your Spot
                </NavLink>
              </div>

              {/* Right image */}
              <img src={e.img} alt={e.title}
                className="w-44 h-64 object-cover rounded-xl hidden md:block shrink-0" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Events;
