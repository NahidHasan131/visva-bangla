import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdCalendarToday, MdArrowBack } from 'react-icons/md';

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : '—';

const SinglePostView = ({ post, backPath = '/blog', backLabel = 'Back to Blog' }) => {
  if (!post) return null;

  return (
    <article className="max-w-3xl mx-auto">

      {/* Back link */}
      <NavLink to={backPath}
        className="inline-flex items-center gap-2 text-sm text-[#62826B] font-medium hover:opacity-70 transition-opacity mb-8">
        <MdArrowBack size={16} /> {backLabel}
      </NavLink>

      {/* Cover image */}
      {post.image && (
        <div className="w-full h-72 lg:h-96 rounded-3xl overflow-hidden mb-8">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <span className="flex items-center gap-1.5">
          <FaUser size={12} className="text-[#62826B]" />
          {post.writer?.name || '—'}
        </span>
        <span className="flex items-center gap-1.5">
          <MdCalendarToday size={14} className="text-[#62826B]" />
          {formatDate(post.createdAt)}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-[#11141B] leading-tight mb-6">
        {post.title}
      </h1>

      {/* Divider */}
      <div className="w-16 h-1 bg-[#62826B] rounded-full mb-8" />

      {/* Content */}
      <div className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
        {post.content}
      </div>

    </article>
  );
};

export default SinglePostView;
