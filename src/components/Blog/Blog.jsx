import React from 'react';
import { NavLink } from 'react-router-dom';
import blog1 from '../../assets/blog-img-1.jpg';
import blog2 from '../../assets/blog-img-2.jpg';
import blog3 from '../../assets/blog-img-3.jpg';
import BlogCard from './BlogCard';

const posts = [
  {
    id: 1,
    img: blog1,
    tag: 'Yoga Practices',
    date: '25 June 2024',
    readTime: '5 min read',
    author: 'Emily Johnson',
    title: 'Yoga for Stress Relief: Poses and Techniques',
    desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis. Vestibulum odio pulvinar turpis faucibus fermentum nec nunc.',
    path: '/blog',
  },
  {
    id: 2,
    img: blog2,
    tag: 'Holistic Wellness',
    date: '20 June 2024',
    readTime: '4 min read',
    author: 'Michael Roberts',
    title: 'The Role of Nutrition in Yoga and Meditation',
    desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis. Vestibulum odio pulvinar turpis faucibus fermentum nec nunc.',
    path: '/blog',
  },
  {
    id: 3,
    img: blog3,
    tag: 'Meditation Techniques',
    date: '15 June 2024',
    readTime: '6 min read',
    author: 'Sarah Thompson',
    title: 'Introduction to Mindfulness Meditation',
    desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis. Vestibulum odio pulvinar turpis faucibus fermentum nec nunc.',
    path: '/blog',
  },
];

const Blog = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800">
              Blog & News
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
              Explore Our Blog & <br /> Latest News
            </h2>
          </div>
          <NavLink
            to="/blog"
            className="self-start md:self-end px-8 py-3 rounded-full font-medium bg-[#62826B] text-[#FFEFC5] hover:bg-[#11141B] hover:scale-110 transition-all duration-300"
          >
            Read All
          </NavLink>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(p => <BlogCard key={p.id} post={p} />)}
        </div>

      </div>
    </section>
  );
};

export default Blog;
