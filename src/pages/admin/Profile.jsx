import React from 'react';
import { useSelector } from 'react-redux';
import { MdAccountCircle, MdEmail, MdPhone, MdVerifiedUser, MdPerson } from 'react-icons/md';
import { useGetBlogsQuery } from '../../store/blogsApi';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const user = useSelector(state => state.auth.user);
  const { data } = useGetBlogsQuery({ page: 1, limit: 100 });

  const allBlogs = data?.data?.blogs || [];
  const myBlogs = allBlogs.filter(b =>
    b.writer?._id === user?._id || b.writer === user?._id
  );
  const totalPosts = myBlogs.length;
  const lastPost = myBlogs.length > 0
    ? myBlogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0]
    : null;
  const lastPostDate = lastPost
    ? new Date(lastPost.createdAt).toLocaleDateString()
    : '—';

  const initials = user?.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'AD';

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Page title */}
      <div className="flex items-center gap-2">
        <MdPerson size={30} className="text-(--color-secondary)" />
        <h1 className="text-3xl font-bold text-[#11141B]">{t('adm_profile')}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left: avatar card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col items-center gap-4 text-center">
          <div className="w-24 h-24 rounded-full bg-(--color-secondary) flex items-center justify-center text-white text-3xl font-bold">
            {initials}
          </div>
          <div>
            <p className="text-xl font-bold text-[#11141B]">{user?.name || '—'}</p>
            <p className="text-sm text-gray-400 mt-1">{user?.email || '—'}</p>
          </div>
          {user?.role && (
            <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-(--color-secondary) text-sm font-medium capitalize">
              {user.role}
            </span>
          )}
          <div className="w-full pt-4 border-t border-gray-100 text-xs text-gray-400">
            {t('adm_member_since')} {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : '—'}
          </div>
        </div>

        {/* Right: details */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">{t('adm_account_info')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <MdAccountCircle size={18} />, label: t('full_name'),   value: user?.name },
                { icon: <MdEmail size={18} />,         label: t('email'),       value: user?.email },
                { icon: <MdPhone size={18} />,         label: t('adm_mobile'),  value: user?.mobile },
                { icon: <MdVerifiedUser size={18} />,  label: t('adm_role'),    value: user?.role },
              ].map(f => (
                <div key={f.label} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                  <span className="text-(--color-secondary) mt-0.5 shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{f.label}</p>
                    <p className="text-sm font-semibold text-[#11141B] mt-0.5 capitalize">{f.value || '—'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">{t('adm_activity')}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/5 text-center">
                <p className="text-2xl font-bold text-(--color-secondary)">{totalPosts}</p>
                <p className="text-xs text-gray-400 mt-1">{t('adm_posts_published')}</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/5 text-center">
                <p className="text-lg font-bold text-(--color-secondary)">{lastPostDate}</p>
                <p className="text-xs text-gray-400 mt-1">{t('adm_last_post')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
