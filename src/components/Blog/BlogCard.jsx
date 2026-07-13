import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const BlogCard = ({ post }) => {
  const { img, tag, date, readTime, author, title, desc, path = '/blog', id } = post;
  const to = id ? `/blog/${id}` : path;

  const {t} = useTranslation();
  
  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-300">

      {/* Image */}
      <NavLink to={to} className="block overflow-hidden relative">
        <img
          src={img}
          alt={title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {tag && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-secondary text-white text-xs font-semibold">
            {tag}
          </span>
        )}
      </NavLink>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <FaUser size={10} className="text-secondary" /> {author}
          </span>
          {readTime && (
            <>
              <span>·</span>
              <span className="flex items-center gap-1">
                <IoTimeOutline size={12} /> {readTime}
              </span>
            </>
          )}
        </div>

        <NavLink to={to}>
          <h3 className="text-lg font-bold text-[#11141B] hover:text-secondary transition-colors duration-300 leading-snug line-clamp-2">
            {title}
          </h3>
        </NavLink>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 flex-1">{desc}</p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <span className="text-xs text-gray-400">{date}</span>
          <NavLink
            to={to}
            className="flex items-center gap-1 text-xs font-semibold text-secondary hover:gap-2 transition-all duration-200"
          >
            {t("read_more")}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
