import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

const pageMeta = {
  '/about':                { title: 'About Us',             desc: 'Learn more about our journey, mission and the team behind VisvaBangla Foundation.' },
  '/about/trainer':        { title: 'Our Trainers',         desc: 'Meet the certified instructors who guide your wellness journey.' },
  '/media':                { title: 'Media',                desc: 'Explore our audio and video yoga sessions for all levels.' },
  '/media/audio':          { title: 'Audio Classes',        desc: 'Listen and practice with our guided audio yoga sessions.' },
  '/media/video':          { title: 'Video Classes',        desc: 'Watch and follow along with our expert video classes.' },
  '/media/gallery':        { title: 'Gallery',              desc: 'Browse our collection of yoga class and event photos.' },
  '/blog':                 { title: 'Blog & News',          desc: 'Stay inspired with spiritual insights, wellness guides and the latest news from VisvaBangla Foundation.' },
  '/contact':              { title: 'Contact Us',           desc: 'Get in touch with us for classes, queries or partnerships.' },
  '/others':               { title: 'Others',               desc: 'Explore more from VisvaBangla Foundation.' },
  '/others/foundation':    { title: 'Foundation',           desc: 'Learn about VisvaBangla Foundation — its history, registration, goals, and humanitarian vision.' },
  '/others/university':    { title: 'Spiritual University', desc: 'Discover the VisvaBangla Spiritual University — a free, non-communal institution for meditation, knowledge, and spiritual education.' },
  '/others/publication':   { title: 'Publication',          desc: 'Explore research journals, books, and publications by VisvaBangla Foundation on universal humanitarian philosophy.' },
  '/others/notice':        { title: 'Notice',               desc: 'Official notices and announcements from VisvaBangla Foundation.' },
  '/others/privacy-policy':{ title: 'Privacy & Policy',     desc: 'Read our privacy policy and understand how VisvaBangla Foundation handles your information.' },
  '/others/terms':         { title: 'Terms & Condition',    desc: 'Terms and conditions governing the use of VisvaBangla Foundation\'s services and platforms.' },
  '/others/download':      { title: 'Download',             desc: 'Download resources, forms, research papers, and materials from VisvaBangla Foundation.' },
};

const Breadcrumb = ({ title: propTitle, desc: propDesc, crumbs: propCrumbs }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const meta = pageMeta[pathname] || { title: 'Page', desc: '' };

  const title = propTitle || meta.title;
  const desc  = propDesc  || meta.desc;

  const segments = pathname.split('/').filter(Boolean);
  const autoCrumbs = [{ label: 'Home', path: '/' }];
  segments.forEach((seg, i) => {
    const path = '/' + segments.slice(0, i + 1).join('/');
    const label = pageMeta[path]?.title || seg.charAt(0).toUpperCase() + seg.slice(1);
    autoCrumbs.push({ label, path });
  });

  const crumbs = propCrumbs || autoCrumbs;

  return (
    <div
      className="relative py-14 lg:py-20 overflow-hidden bg-secondary"
    >
      {/* blurred circle decorations */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-340 mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: title + desc */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">{title}</h1>
          {desc && (
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">{desc}</p>
          )}
        </div>

        {/* Right: breadcrumb trail */}
        <div className="flex items-center gap-2 text-sm text-gray-300 flex-wrap">
          {crumbs.map((crumb, i) => (
            <React.Fragment key={crumb.path}>
              {i > 0 && <MdArrowForward size={16} className="text-gray-400" />}
              {i === crumbs.length - 1 ? (
                <span className="text-white font-medium">{crumb.label}</span>
              ) : (
                <NavLink to={crumb.path} className="hover:text-white transition-colors duration-200">
                  {crumb.label}
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Breadcrumb;
