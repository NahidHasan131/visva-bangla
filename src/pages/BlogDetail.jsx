import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import SinglePostView from '../components/Blog/SinglePostView';
import { useGetBlogQuery, useGetBlogsQuery } from '../store/blogsApi';
import { MdArrowForward } from 'react-icons/md';

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';

const BlogDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBlogQuery(id);
  const { data: recentData } = useGetBlogsQuery({ page: 1, limit: 5 });

  const post = data?.data?.blog;
  const recentPosts = (recentData?.data?.blogs || []).filter(b => b._id !== id);

  return (
    <div>
      <Breadcrumb
        title="Single Blog Post"
        desc={post?.title || ''}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post?.title || 'Post', path: '#' },
        ]}
      />

      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {isLoading && <p className="text-center py-20 text-gray-400">Loading...</p>}
        {isError   && <p className="text-center py-20 text-red-400">Post not found.</p>}

        {post && (
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Main content */}
            <div className="flex-1 min-w-0">
              <SinglePostView post={post} />
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 flex flex-col gap-8">

              {/* Recent posts */}
              {recentPosts.length > 0 && (
                <div className="flex flex-col gap-4">
                  <h4 className="text-base font-bold text-[#11141B] border-b border-gray-100 pb-3">Recent Posts</h4>
                  <ul className="flex flex-col gap-4">
                    {recentPosts.slice(0, 4).map(b => (
                      <li key={b._id}>
                        <NavLink to={`/blog/${b._id}`} className="flex items-start gap-3 group">
                          <img src={b.image} alt={b.title}
                            className="w-16 h-14 rounded-xl object-cover shrink-0" />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-[#11141B] group-hover:text-[#62826B] transition-colors line-clamp-2 leading-snug">
                              {b.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{formatDate(b.createdAt)}</p>
                          </div>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/blog"
                    className="flex items-center gap-1 text-sm text-[#62826B] font-medium hover:opacity-70 transition-opacity mt-1">
                    ← All Posts
                  </NavLink>
                </div>
              )}

              {/* CTA */}
              <div className="bg-[#F0F7F2] rounded-2xl p-6 flex flex-col gap-4">
                <h4 className="font-bold text-[#11141B]">Start Your Journey</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Join thousands of members and transform your life with yoga.</p>
                <NavLink to="/contact"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#62826B] text-[#FFEFC5] text-sm font-medium hover:bg-[#11141B] transition-colors">
                  Join Free Class <MdArrowForward size={15} />
                </NavLink>
              </div>

            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
