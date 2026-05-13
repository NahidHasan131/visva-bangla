import { NavLink } from 'react-router-dom';
import { IoTimeOutline } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';

// variant: 'dark' (homepage dark bg) | 'light' (media page light bg)
const ClassCard = ({ cls, variant = 'dark' }) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`group flex flex-col rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300
        ${isDark
          ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
          : 'bg-white border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)]'
        }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={cls.img}
          alt={cls.title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${isDark ? 'brightness-90' : ''}`}
        />
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold ${cls.badgeColor}`}>
          {cls.badge}
        </span>
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
          {cls.type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">

        {/* Meta */}
        <div className={`flex items-center justify-between text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
          <span className="flex items-center gap-1">
            <IoTimeOutline size={13} />
            {cls.duration}
          </span>
          <span className="flex items-center gap-1">
            <LuUsers size={13} />
            {cls.participants}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className={`text-base font-bold leading-snug ${isDark ? 'text-white' : 'text-[#11141B]'}`}>
            {cls.title}
          </h3>
          <p className="text-secondary text-xs font-medium mt-0.5">{cls.subtitle}</p>
        </div>

        {/* Desc */}
        <p className={`text-xs leading-relaxed flex-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
          {cls.desc}
        </p>

        {/* Button */}
        <NavLink
          to={cls.path}
          className={`mt-1 flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 group/btn
            hover:bg-secondary hover:border-secondary hover:text-white
            ${isDark
              ? 'bg-white/8 border border-white/10 text-white'
              : 'bg-gray-50 border border-gray-200 text-[#11141B]'
            }`}
        >
          <span className="flex items-center gap-1.5 text-secondary group-hover/btn:text-white transition-colors">
            {cls.icon}
            Join Program
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            className={`group-hover/btn:translate-x-0.5 transition-all duration-200 ${isDark ? 'text-white/40' : 'text-gray-400'} group-hover/btn:text-white`}>
            <path d="M3 7h8M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default ClassCard;
