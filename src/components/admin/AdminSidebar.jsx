import { NavLink } from 'react-router-dom';
import {
  MdDashboard, MdArticle, MdVideoLibrary, MdAudiotrack,
  MdPhotoLibrary, MdPeople, MdPerson, MdStar
} from 'react-icons/md';
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { HiHome } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import visvaBangala from '../../assets/logo/visva-bangala.png';

const baseNavItems = [
  { label: 'Dashboard',  path: '/admin',           icon: <MdDashboard size={20} />,    end: true },
  { label: 'Blog Posts', path: '/admin/blog',       icon: <MdArticle size={20} /> },
  { label: 'Videos',     path: '/admin/videos',     icon: <MdVideoLibrary size={20} /> },
  { label: 'Audio',      path: '/admin/audio',      icon: <MdAudiotrack size={20} /> },
  { label: 'Gallery',    path: '/admin/gallery',    icon: <MdPhotoLibrary size={20} /> },
  { label: 'Reviews',    path: '/admin/reviews',    icon: <MdStar size={20} /> },
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
        <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={onToggle} />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        h-screen flex flex-col shrink-0
        transition-all duration-300 ease-in-out
        bg-[#0d1117] border-r border-white/10
        ${open ? 'w-60 translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-16'}
      `}>
        {/* Logo */}
        <div className="flex items-center h-16 px-4 justify-between border-b border-white/8">
          <div className={`flex items-center gap-2 overflow-hidden transition-all duration-300 ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'}`}>
            <img src={visvaBangala} alt="Visva Bangla" className="h-7 w-auto object-contain shrink-0" />
            <span className="text-white font-bold text-sm uppercase whitespace-nowrap">VisvaBangla</span>
          </div>
          <button
            onClick={onToggle}
            className="text-white/50 hover:text-white transition-colors shrink-0 hidden lg:block"
            title={open ? 'Collapse' : 'Expand'}
          >
            {open ? <TbLayoutSidebarLeftCollapse size={20} /> : <TbLayoutSidebarLeftExpand size={20} />}
          </button>
          <button onClick={onToggle} className="text-white/40 hover:text-white transition-colors shrink-0 lg:hidden">
            <IoClose size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 overflow-y-auto overflow-x-hidden">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              title={!open ? item.label : undefined}
              onClick={() => { if (window.innerWidth < 1024) onToggle(); }}
              className={({ isActive }) =>
                `flex items-center h-11 px-4 text-sm font-medium transition-all duration-200 gap-3 mx-2 rounded-xl mb-0.5 ${
                  isActive
                    ? 'bg-secondary text-white shadow-[0_2px_12px_rgba(6,164,167,0.35)]'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <span className="shrink-0">{item.icon}</span>
              <span className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'}`}>
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div className="border-t border-white/10 py-3">
          <NavLink
            to="/"
            title={!open ? 'Back to Site' : undefined}
            className="flex items-center h-11 px-4 gap-3 mx-2 rounded-xl text-white/60 hover:bg-white/8 hover:text-white transition-all duration-200"
          >
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
