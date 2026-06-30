import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LuUsers } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';

// variant: 'dark' | 'light' | 'glass'
const ClassCard = ({ cls, variant = 'dark' }) => {
  const {t} = useTranslation();
  const isDark = variant === 'dark';
  const isGlass = variant === 'glass';
  const [expanded, setExpanded] = useState(false);

  const WORD_LIMIT = 8;
  const translatedDesc = t(cls.desc);
  const words = translatedDesc?.split(' ') || [];
  const isLong = words.length > WORD_LIMIT;
  const displayDesc = expanded || !isLong
    ? translatedDesc
    : words.slice(0, WORD_LIMIT).join(' ') + '...';

  return (
    <div
      className={`group flex flex-col rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300
        ${isDark
          ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
          : isGlass
          ? 'border border-white/15 hover:border-white/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]'
          : 'bg-white border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)]'
        }`}
      style={isGlass ? {
        background: 'rgba(255,255,255,0.07)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
      } : {}}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-60">
        <img
          src={cls.img}
          alt={cls.title}
          className={`w-full h-full object-fill group-hover:scale-105 transition-transform duration-500 ${(isDark || isGlass) ? 'brightness-90' : ''}`}
        />
        {/* Glossy shimmer overlay on image */}
        {isGlass && (
          <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-black/30 pointer-events-none" />
        )}
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
          {cls.type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">

        {/* Meta */}
        <div className={`flex items-center justify-between text-xs ${(isDark || isGlass) ? 'text-white/40' : 'text-gray-400'}`}>
          <span className="flex items-center gap-1">
            <LuUsers size={13} />
            {cls.participants} + {t("participants")}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className={`text-base font-bold leading-snug ${(isDark || isGlass) ? 'text-white' : 'text-[#11141B]'}`}>
            {t(cls.title)}
          </h3>
        </div>

        {/* Desc */}
        <div className={`text-xs leading-relaxed flex-1 ${(isDark || isGlass) ? 'text-white/55' : 'text-gray-500'}`}>
          <span>{displayDesc}</span>
          {isLong && (
            <button
              onClick={() => setExpanded(prev => !prev)}
              className={`ml-1 text-xs font-semibold underline underline-offset-2 transition-colors ${
                (isDark || isGlass) ? 'text-white/70 hover:text-white' : 'text-secondary hover:text-secondary/80'
              }`}
            >
              {expanded ? `${t("read_less")}` : `${t("read_more")}`}
            </button>
          )}
        </div>

        {/* Button */}
        <NavLink
          to={cls.path}
          className={`mt-1 flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 group/btn
            hover:bg-secondary hover:border-secondary hover:text-white
            ${isDark
              ? 'bg-white/8 border border-white/10 text-white'
              : isGlass
              ? 'border border-white/20 text-white'
              : 'bg-gray-50 border border-gray-200 text-[#11141B]'
            }`}
          style={isGlass ? { background: 'rgba(255,255,255,0.08)' } : {}}
        >
          <span className={`flex items-center gap-1.5 transition-colors group-hover/btn:text-white ${isGlass ? 'text-white/80' : 'text-secondary'}`}>
            {cls.icon}
            {t("join_program")}`
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            className={`group-hover/btn:translate-x-0.5 transition-all duration-200 group-hover/btn:text-white ${(isDark || isGlass) ? 'text-white/40' : 'text-gray-400'}`}>
            <path d="M3 7h8M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default ClassCard;
