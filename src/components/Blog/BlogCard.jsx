import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const BlogCard = ({ post }) => {
  const { img, tag, date, author, title, desc, path = '/blog', id } = post;
  const to = id ? `/blog/${id}` : path;

  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <NavLink to={to} className="block overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
        />
      </NavLink>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-[#62826B]/10 text-xs font-medium text-[#62826B]">
            {tag}
          </span>
        </div>

        <NavLink to={to}>
          <h3 className="text-2xl font-semibold text-[#11141B] hover:text-[#62826B] transition-colors duration-300 leading-snug">
            {title}
          </h3>
        </NavLink>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{desc}</p>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-400 mt-auto">
          <span className="flex items-center gap-1"><FaUser size={10} /> {author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
