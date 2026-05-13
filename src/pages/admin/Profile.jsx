import React from 'react';
import { useSelector } from 'react-redux';
import { MdAccountCircle, MdEmail, MdPhone, MdVerifiedUser, MdCalendarToday, MdPerson } from 'react-icons/md';

import { useGetBlogsQuery } from '../../store/blogsApi';

const Profile = () => {
  const user = useSelector(state => state.auth.user);
  const { data } = useGetBlogsQuery({ page: 1, limit: 100 });

  const allBlogs = data?.data?.blogs || [];
  // filter by current user's posts
  const myBlogs = allBlogs.filter(b =>
    b.writer?._id === user?._id || b.writer === user?._id
  );
  const totalPosts = myBlogs.length;
  const lastPost = myBlogs.length > 0
    ? myBlogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0]
    : null;
  const lastPostDate = lastPost
    ? new Date(lastPost.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    : '—';

  const initials = user?.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'AD';

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Page title */}
      <div className="flex items-center gap-2">
        <MdPerson size={30} className="text-[#62826B]" />
        <h1 className="text-3xl font-bold text-[#11141B]">Profile</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left: avatar card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col items-center gap-4 text-center">
          <div className="w-24 h-24 rounded-full bg-[#62826B] flex items-center justify-center text-white text-3xl font-bold">
            {initials}
          </div>
          <div>
            <p className="text-xl font-bold text-[#11141B]">{user?.name || '—'}</p>
            <p className="text-sm text-gray-400 mt-1">{user?.email || '—'}</p>
          </div>
          {user?.role && (
            <span className="px-4 py-1.5 rounded-full bg-[#62826B]/10 text-[#62826B] text-sm font-medium capitalize">
              {user.role}
            </span>
          )}
          <div className="w-full pt-4 border-t border-gray-100 text-xs text-gray-400">
            Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : '—'}
          </div>
        </div>

        {/* Right: details */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Account Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {[
                { icon: <MdAccountCircle size={18} />, label: 'Full Name',   value: user?.name },
                { icon: <MdEmail size={18} />,         label: 'Email',       value: user?.email },
                { icon: <MdPhone size={18} />,         label: 'Mobile',      value: user?.mobile },
                { icon: <MdVerifiedUser size={18} />,  label: 'Role',        value: user?.role },
              ].map(f => (
                <div key={f.label} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                  <span className="text-[#62826B] mt-0.5 shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{f.label}</p>
                    <p className="text-sm font-semibold text-[#11141B] mt-0.5 capitalize">{f.value || '—'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Activity</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#62826B]/5 text-center">
                <p className="text-2xl font-bold text-[#62826B]">{totalPosts}</p>
                <p className="text-xs text-gray-400 mt-1">Posts Published</p>
              </div>
              <div className="p-4 rounded-xl bg-[#62826B]/5 text-center">
                <p className="text-lg font-bold text-[#62826B]">{lastPostDate}</p>
                <p className="text-xs text-gray-400 mt-1">Last Post</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
