import { NavLink } from 'react-router-dom';
import {
  MdArticle, MdVideoLibrary, MdAudiotrack, MdPhotoLibrary,
  MdArrowForward, MdDashboard, MdPeople, MdImage, MdMusicNote, MdPlayCircle
} from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useGetBlogsQuery } from '../../store/blogsApi';
import { useGetAudiosQuery } from '../../store/audioApi';
import { useGetVideosQuery } from '../../store/videoApi';
import { useGetGalleryQuery } from '../../store/galleryApi';
import { useGetUsersQuery } from '../../store/usersApi';
import { useTranslation } from 'react-i18next';

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';

const Dashboard = () => {
  const { t } = useTranslation();
  const user = useSelector(state => state.auth.user);
  const isAdmin = user?.role === 'admin';

  const { data: blogsData }   = useGetBlogsQuery({ page: 1, limit: 5 });
  const { data: audiosData }  = useGetAudiosQuery();
  const { data: videosData }  = useGetVideosQuery();
  const { data: galleryData } = useGetGalleryQuery();
  const { data: usersData }   = useGetUsersQuery(undefined, { skip: !isAdmin });

  const allBlogs   = blogsData?.data?.blogs   || [];
  const allAudios  = audiosData?.data          || [];
  const allVideos  = videosData?.data          || [];
  const allGallery = galleryData?.data         || [];
  const allUsers   = Array.isArray(usersData?.data) ? usersData.data :
                     Array.isArray(usersData?.data?.users) ? usersData.data.users :
                     Array.isArray(usersData) ? usersData : [];

  const myBlogs   = allBlogs.filter(b => b.writer?._id === user?._id || b.writer === user?._id);
  const myAudios  = allAudios.filter(a => a.uploadedBy === user?._id || a.uploadedBy?._id === user?._id);
  const myVideos  = allVideos.filter(v => v.uploadedBy === user?._id || v.uploadedBy?._id === user?._id);
  const myGallery = allGallery.filter(g => g.uploadedBy === user?._id || g.uploadedBy?._id === user?._id);

  const quickActions = [
    { label: t('adm_new_blog'),     path: '/admin/blog',    icon: <MdArticle size={16} />,      color: 'text-violet-600 bg-violet-50' },
    { label: t('adm_add_video'),    path: '/admin/videos',  icon: <MdVideoLibrary size={16} />, color: 'text-blue-600 bg-blue-50' },
    { label: t('adm_upload_audio'), path: '/admin/audio',   icon: <MdAudiotrack size={16} />,   color: 'text-amber-600 bg-amber-50' },
    { label: t('adm_add_gallery'),  path: '/admin/gallery', icon: <MdPhotoLibrary size={16} />, color: 'text-pink-600 bg-pink-50' },
  ];

  const adminStats = [
    { label: t('adm_blog_posts'),     value: blogsData?.pagination?.total ?? allBlogs.length, icon: <MdArticle size={22} />,      path: '/admin/blog',    gradient: 'from-violet-500 to-violet-600' },
    { label: t('adm_videos'),         value: allVideos.length,  icon: <MdVideoLibrary size={22} />, path: '/admin/videos',  gradient: 'from-blue-500 to-blue-600' },
    { label: t('adm_audio_tracks'),   value: allAudios.length,  icon: <MdAudiotrack size={22} />,   path: '/admin/audio',   gradient: 'from-amber-500 to-amber-600' },
    { label: t('adm_gallery_photos'), value: allGallery.length, icon: <MdPhotoLibrary size={22} />, path: '/admin/gallery', gradient: 'from-pink-500 to-pink-600' },
    { label: t('adm_total_users'),    value: allUsers.length,   icon: <MdPeople size={22} />,       path: '/admin/users',   gradient: 'from-secondary to-[#047f82]' },
  ];

  const userStats = [
    { label: t('adm_my_blog_posts'),     value: myBlogs.length,   icon: <MdArticle size={22} />,      path: '/admin/blog',    gradient: 'from-violet-500 to-violet-600' },
    { label: t('adm_my_videos'),         value: myVideos.length,  icon: <MdVideoLibrary size={22} />, path: '/admin/videos',  gradient: 'from-blue-500 to-blue-600' },
    { label: t('adm_my_audio_tracks'),   value: myAudios.length,  icon: <MdAudiotrack size={22} />,   path: '/admin/audio',   gradient: 'from-amber-500 to-amber-600' },
    { label: t('adm_my_gallery_photos'), value: myGallery.length, icon: <MdPhotoLibrary size={22} />, path: '/admin/gallery', gradient: 'from-pink-500 to-pink-600' },
  ];

  const stats = isAdmin ? adminStats : userStats;
  const recentBlogs = isAdmin ? allBlogs.slice(0, 5) : myBlogs.slice(0, 5);

  return (
    <div className="flex flex-col gap-8 w-full">

      {/* Title bar */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
              <MdDashboard size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#11141B]">{t('adm_dashboard')}</h1>
          </div>
          <p className="text-sm text-gray-400 mt-1 ml-11">
            {t('adm_welcome_back')}, <span className="font-semibold text-[#11141B]">{user?.name}</span>
            {user?.role && (
              <span className="ml-2 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold capitalize">
                {user.role}
              </span>
            )}
          </p>
        </div>
        <span className="text-xs text-gray-400 bg-white border border-gray-100 px-3 py-1.5 rounded-full hidden sm:block shadow-sm">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map(s => (
          <NavLink
            key={s.label}
            to={s.path}
            className="group bg-white rounded-2xl p-5 flex flex-col gap-3 border border-gray-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden relative"
          >
            {/* gradient top bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${s.gradient} text-white shadow-sm`}>
              {s.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-[#11141B]">{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">{s.label}</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              View <MdArrowForward size={12} />
            </div>
          </NavLink>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent blog posts */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-sm uppercase tracking-widest text-gray-400">
              {isAdmin ? t('adm_recent_posts') : t('adm_my_recent_posts')}
            </h2>
            <NavLink to="/admin/blog" className="text-xs text-secondary hover:underline font-medium">
              {t('adm_view_all')}
            </NavLink>
          </div>
          {recentBlogs.length === 0 ? (
            <p className="text-sm text-gray-400 py-4 text-center">{t('adm_no_posts')}</p>
          ) : (
            <div className="flex flex-col divide-y divide-gray-50">
              {recentBlogs.map(b => (
                <div key={b._id} className="flex items-center gap-3 py-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                    {b.image
                      ? <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                      : <div className="w-full h-full flex items-center justify-center"><MdArticle size={18} className="text-gray-300" /></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#11141B] line-clamp-1">{b.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {b.writer?.name || '—'} · {formatDate(b.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">

          {isAdmin ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-sm uppercase tracking-widest text-gray-400">{t('adm_users')}</h2>
                <NavLink to="/admin/users" className="text-xs text-secondary hover:underline font-medium">{t('adm_manage')}</NavLink>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-[#047f82] flex items-center justify-center shadow-sm">
                  <MdPeople size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#11141B]">{allUsers.length}</p>
                  <p className="text-xs text-gray-400">{t('adm_total_registered')}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-50">
                {allUsers.slice(0, 3).map(u => (
                  <div key={u._id} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary font-bold text-xs">
                      {u.name?.charAt(0)?.toUpperCase() || <FaUser size={10} />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#11141B] truncate">{u.name}</p>
                      <p className="text-xs text-gray-400 capitalize">{u.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-3 shadow-sm">
              <h2 className="font-bold text-sm uppercase tracking-widest text-gray-400">{t('adm_my_content')}</h2>
              {[
                { label: t('adm_blog_posts'), value: myBlogs.length,   icon: <MdArticle size={16} className="text-violet-500" /> },
                { label: t('adm_videos'),     value: myVideos.length,  icon: <MdPlayCircle size={16} className="text-blue-500" /> },
                { label: t('adm_audio'),      value: myAudios.length,  icon: <MdMusicNote size={16} className="text-amber-500" /> },
                { label: t('adm_gallery'),    value: myGallery.length, icon: <MdImage size={16} className="text-pink-500" /> },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold text-[#11141B]">{item.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Quick actions */}
          {isAdmin && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-3 shadow-sm">
              <h2 className="font-bold text-sm uppercase tracking-widest text-gray-400">{t('adm_quick_actions')}</h2>
              {quickActions.map(a => (
                <NavLink
                  key={a.label}
                  to={a.path}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center ${a.color}`}>{a.icon}</span>
                    <span className="text-sm font-medium text-[#11141B]">{a.label}</span>
                  </div>
                  <MdArrowForward size={14} className="text-gray-300 group-hover:text-secondary transition-colors" />
                </NavLink>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

