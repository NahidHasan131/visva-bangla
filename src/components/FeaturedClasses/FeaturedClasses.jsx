import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from '../../lib/motion';
import { classesData } from '../../data/classesData';
import ClassCard from './ClassCard';

const FeaturedClasses = () => {
  return (
    <motion.section
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #03464a 0%, #045c60 35%, #036b6f 65%, #024446 100%)',
      }}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {/* Glowing orbs — premium depth */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#06a4a7]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#06a4a7]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-white/3 blur-3xl pointer-events-none" />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Bubble decorations */}
      <div className="absolute top-10 right-10 w-52 h-52 rounded-full bg-white/4 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-40 h-40 rounded-full bg-white/4 pointer-events-none" />
      <div className="relative z-10 max-w-340 mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            className="flex flex-col gap-4"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Featured Programs
            </span>
            <h2 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
              Explore Our Yoga &<br />
              <span className="text-white">Meditation Programs</span>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
              Free and open to all — from beginners to advanced practitioners. Rooted in universal humanitarian philosophy and spiritual wisdom.
            </p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            <NavLink
              to="/media"
              className="self-start md:self-end px-7 py-3 rounded-full text-sm font-semibold bg-white text-secondary hover:bg-white/90 transition-all duration-300"
            >
              View All Programs
            </NavLink>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {classesData.map((cls, i) => (
            <motion.div key={i} variants={fadeUp}>
              <ClassCard cls={cls} variant="glass" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default FeaturedClasses;
