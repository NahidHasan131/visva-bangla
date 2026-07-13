import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdArrowForward, MdSearch } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import BlogCard from '../components/Blog/BlogCard';
import Pagination from '../components/Media/Pagination';
import { useGetBlogsQuery } from '../store/blogsApi';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PER_PAGE = 6;

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';

const BlogPage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [search, setSearch] = useState('');

  const { data, isLoading } = useGetBlogsQuery({ page, limit: PER_PAGE });

  const blogs   = data?.data?.blogs || [];
  const total   = data?.pagination?.total || 0;
  const totalPages = data?.pagination?.pages || 1;

  // featured = first post (newest)
  const featured = blogs[0] || null;
  // rest for grid
  const rest = blogs.slice(1);

  const {t} = useTranslation();

  // map API blog → BlogCard compatible shape
  const toCard = (b) => ({
    id:     b._id,
    img:    b.image,
    tag:    b.tag || `${t("blog")}`,
    date:   formatDate(b.createdAt),
    author: b.writer?.name || '—',
    title:  b.title,
    desc:   b.content,
    path:   '/blog',
  });

  const filteredRest = search
    ? rest.filter(b => b.title.toLowerCase().includes(search.toLowerCase()))
    : rest;

  return (
    <div>
      <Breadcrumb />

      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">

        {isLoading && <p className="text-center py-20 text-gray-400">{t("loading_posts")}</p>}

        {!isLoading && featured && (
          <>
            {/* Featured Post */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-0.5 bg-secondary" />
                <span className="text-sm font-medium text-secondary">{t("featured_post")}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-0 items-stretch bg-secondary/8 rounded-3xl overflow-hidden">
                <NavLink to={`/blog/${featured._id}`} className="block overflow-hidden h-72 md:h-auto">
                  <img src={featured.image} alt={featured.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </NavLink>
                <div className="flex flex-col gap-5 p-8 lg:p-10 justify-center">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><FaUser size={11} /> {featured.writer?.name || '—'}</span>
                    <span>·</span>
                    <span>{formatDate(featured.createdAt)}</span>
                  </div>
                  <NavLink to={`/blog/${featured._id}`}>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#11141B] leading-tight hover:text-secondary transition-colors duration-300">
                      {featured.title}
                    </h2>
                  </NavLink>
                  <p className="text-gray-500 leading-relaxed line-clamp-3">{featured.content}</p>
                  <NavLink to={`/blog/${featured._id}`}
                    className="self-start flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary text-white text-sm font-medium hover:bg-secondary/90 transition-colors duration-300">
                    {t("read_more")} <MdArrowForward size={16} />
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Search + grid + sidebar */}
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Posts grid */}
              <div className="flex-1">
                {/* Search */}
                <div className="relative mb-8">
                  <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder={t("search_posts")}
                    value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-secondary transition-colors bg-white" />
                </div>

                {filteredRest.length === 0 && (
                  <p className="text-center py-12 text-gray-400">{t("no_posts_found")}</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredRest.map(b => <BlogCard key={b._id} post={toCard(b)} />)}
                </div>

                <div className="mt-8">
                  <Pagination page={page} totalPages={totalPages} total={total} label="posts" limit={PER_PAGE} onPageChange={setPage} />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:w-72 flex flex-col gap-8 shrink-0">

                {/* Recent posts */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-lg font-bold text-[#11141B]">{t("recent_posts")}</h4>
                  <ul className="flex flex-col gap-4">
                    {blogs.slice(0, 4).map(b => (
                      <li key={b._id} className="flex items-center gap-3">
                        <NavLink to="/blog" className="shrink-0">
                          <img src={b.image} alt={b.title} className="w-16 h-16 rounded-xl object-cover" />
                        </NavLink>
                        <div className="flex flex-col gap-1 min-w-0">
                          <NavLink to="/blog" className="text-sm font-medium text-[#11141B] hover:text-primary transition-colors leading-snug line-clamp-2">
                            {b.title}
                          </NavLink>
                          <span className="text-xs text-gray-400">{formatDate(b.createdAt)}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-[#11141B] rounded-2xl p-6 flex flex-col gap-4">
                  <h4 className="text-white font-bold text-lg">{t("start_your_journey")}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{t("journey_cta_description")}</p>
                  <NavLink to="/contact"
                    className="text-center py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-opacity">
                    {t("join_free_class")}
                  </NavLink>
                </div>

              </aside>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default BlogPage;
