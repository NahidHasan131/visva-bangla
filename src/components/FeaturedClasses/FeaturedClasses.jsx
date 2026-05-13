import { NavLink } from 'react-router-dom';
import { classesData } from '../../data/classesData';
import ClassCard from './ClassCard';

const FeaturedClasses = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4">
            <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Featured Programs
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Explore Our Yoga &<br />
              <span className="text-white/80">Meditation Programs</span>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Free and open to all — from beginners to advanced practitioners. Rooted in universal humanitarian philosophy and spiritual wisdom.
            </p>
          </div>
          <NavLink
            to="/media"
            className="self-start md:self-end px-7 py-3 rounded-full text-sm font-semibold bg-white text-secondary hover:bg-white/90 transition-all duration-300"
          >
            View All Programs
          </NavLink>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classesData.map((cls, i) => (
            <ClassCard key={i} cls={cls} variant="light" />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedClasses;
