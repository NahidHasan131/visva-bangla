import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MdDashboard, MdArticle, MdVideoLibrary, MdAudiotrack,
  MdPhotoLibrary, MdPeople, MdPerson
} from 'react-icons/md';
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { HiHome } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const baseNavItems = [
  { label: 'Dashboard',  path: '/admin',           icon: <MdDashboard size={20} />,    end: true },
  { label: 'Blog Posts', path: '/admin/blog',       icon: <MdArticle size={20} /> },
  { label: 'Videos',     path: '/admin/videos',     icon: <MdVideoLibrary size={20} /> },
  { label: 'Audio',      path: '/admin/audio',      icon: <MdAudiotrack size={20} /> },
  { label: 'Gallery',    path: '/admin/gallery',    icon: <MdPhotoLibrary size={20} /> },
];

const adminOnlyItems = [
  { label: 'Users',      path: '/admin/users',      icon: <MdPeople size={20} /> },
];

const bottomItems = [
  { label: 'Profile',    path: '/admin/profile',    icon: <MdPerson size={20} /> },
];

const AdminSidebar = ({ open, onToggle }) => {
  const user = useSelector(state => state.auth.user);
  const isAdmin = user?.role === 'admin';

  const navItems = [
    ...baseNavItems,
    ...(isAdmin ? adminOnlyItems : []),
    ...bottomItems,
  ];

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/30 z-20 lg:hidden" onClick={onToggle} />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        h-screen bg-white border-r border-gray-200 flex flex-col shrink-0
        transition-all duration-300 ease-in-out
        ${open ? 'w-60 translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-16'}
      `}>
        <div className="flex items-center border-b border-gray-200 h-16 px-4 justify-between">
          <span className={`text-[#11141B] font-bold text-base whitespace-nowrap transition-all duration-300 overflow-hidden ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'}`}>
            🌿 Shunno Admin
          </span>
          <button onClick={onToggle}
            className="text-gray-400 hover:text-[#62826B] transition-colors shrink-0 hidden lg:block"
            title={open ? 'Collapse sidebar' : 'Expand sidebar'}>
            {open ? <TbLayoutSidebarLeftCollapse size={22} /> : <TbLayoutSidebarLeftExpand size={22} />}
          </button>
          <button onClick={onToggle}
            className="text-gray-400 hover:text-[#62826B] transition-colors shrink-0 lg:hidden">
            <IoClose size={22} />
          </button>
        </div>

        <nav className="flex-1 py-3 overflow-y-auto overflow-x-hidden">
          {navItems.map(item => (
            <NavLink key={item.path} to={item.path} end={item.end}
              title={!open ? item.label : undefined}
              onClick={() => { if (window.innerWidth < 1024) onToggle(); }}
              className={({ isActive }) =>
                `flex items-center h-11 px-4 text-sm font-medium transition-colors duration-200 gap-3 ${
                  isActive
                    ? 'bg-[#62826B]/10 text-[#62826B] border-r-2 border-[#62826B]'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#11141B]'
                }`
              }>
              <span className="shrink-0">{item.icon}</span>
              <span className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'}`}>
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-200 py-3">
          <NavLink to="/" title={!open ? 'Back to Site' : undefined}
            className="flex items-center h-11 px-4 gap-3 text-gray-600 hover:text-[#62826B] transition-colors">
            <HiHome size={20} className="shrink-0" />
            <span className={`text-sm whitespace-nowrap transition-all duration-300 overflow-hidden ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'}`}>
              Back to Site
            </span>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
