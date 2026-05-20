import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from '../../lib/motion';
import { useGetBlogsQuery } from '../../store/blogsApi';
import BlogCard from './BlogCard';

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';

const Blog = () => {
  const { data, isLoading } = useGetBlogsQuery({ page: 1, limit: 3 });
  const apiBlogs = data?.data?.blogs || [];

  const posts = apiBlogs.map(b => ({
    id:     b._id,
    img:    b.image,
    tag:    b.tag || 'Blog',
    date:   formatDate(b.createdAt),
    author: b.writer?.name || 'Bishwabangla Foundation',
    title:  b.title,
    desc:   b.content,
    path:   '/blog',
  }));

  return (
    <motion.section
      className="py-16 lg:py-24 bg-white"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            className="flex flex-col gap-3"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Blog & News
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
              Latest Articles &<br />
              <span className="text-secondary">Spiritual Insights</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            <NavLink
              to="/blog"
              className="self-start md:self-end px-7 py-3 rounded-full text-sm font-semibold border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
            >
              View All Posts
            </NavLink>
          </motion.div>
        </div>

        {/* Cards */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[1, 2, 3].map(i => (
              <div key={i} className="rounded-2xl bg-gray-100 animate-pulse h-80" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center py-16 text-gray-400">No posts available yet.</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {posts.map((p, i) => (
              <motion.div key={p.id || i} variants={fadeUp}>
                <BlogCard post={p} />
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </motion.section>
  );
};

export default Blog;
