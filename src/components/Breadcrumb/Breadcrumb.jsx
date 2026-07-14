import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const Breadcrumb = ({ title: propTitle, desc: propDesc, crumbs: propCrumbs }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const pathname = location.pathname;

  const pageMeta = {
    '/about':                         { title: t('bc_about_title'),               desc: t('bc_about_desc') },
    '/about/trainer':                  { title: t('bc_trainer_title'),              desc: t('bc_trainer_desc') },
    '/media':                          { title: t('bc_media_title'),                desc: t('bc_media_desc') },
    '/media/audio':                    { title: t('bc_audio_title'),                desc: t('bc_audio_desc') },
    '/media/video':                    { title: t('bc_video_title'),                desc: t('bc_video_desc') },
    '/media/gallery':                  { title: t('bc_gallery_title'),              desc: t('bc_gallery_desc') },
    '/blog':                           { title: t('bc_blog_title'),                 desc: t('bc_blog_desc') },
    '/contact':                        { title: t('bc_contact_title'),              desc: t('bc_contact_desc') },
    '/institutional-info':             { title: t('bc_others_title'),               desc: t('bc_others_desc') },
    '/institutional-info/foundation':  { title: t('bc_foundation_title'),           desc: t('bc_foundation_desc') },
    '/institutional-info/university':  { title: t('bc_university_title'),           desc: t('bc_university_desc') },
    '/institutional-info/publication': { title: t('bc_publication_title'),          desc: t('bc_publication_desc') },
    '/institutional-info/notice':      { title: t('bc_notice_title'),               desc: t('bc_notice_desc') },
    '/institutional-info/privacy-policy': { title: t('bc_privacy_title'),          desc: t('bc_privacy_desc') },
    '/institutional-info/terms':       { title: t('bc_terms_title'),                desc: t('bc_terms_desc') },
    '/institutional-info/download':    { title: t('bc_download_title'),             desc: t('bc_download_desc') },
  };

  const meta = pageMeta[pathname] || { title: t('bc_default_title'), desc: '' };

  const title = propTitle || meta.title;
  const desc  = propDesc  || meta.desc;

  const segments = pathname.split('/').filter(Boolean);
  const autoCrumbs = [{ label: t('home'), path: '/' }];
  segments.forEach((seg, i) => {
    const path = '/' + segments.slice(0, i + 1).join('/');
    const label = pageMeta[path]?.title || seg.charAt(0).toUpperCase() + seg.slice(1);
    autoCrumbs.push({ label, path });
  });

  const crumbs = propCrumbs || autoCrumbs;

  return (
    <div
      className="relative pb-20 pt-36 overflow-hidden bg-secondary"
    >
      {/* blurred circle decorations */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-340 mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: title + desc */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">{title}</h1>
          {desc && (
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">{desc}</p>
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
