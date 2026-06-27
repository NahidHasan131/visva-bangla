import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { toast } from 'sonner';
import visvaBangala from '../../assets/logo/visva-bangala.png';
import visvaBanglaMenuImg from '../../assets/visvaBanglaMenuImg.jpeg';


const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us', path: '/about',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Trainer', path: '/about/trainer' },
    ],
  },
  {
    label: 'Media', path: '/media',
    children: [
      { label: 'All Media', path: '/media' },
      { label: 'Audio', path: '/media/audio' },
      { label: 'Video', path: '/media/video' },
      { label: 'Gallery', path: '/media/gallery' },
    ],
  },
  { label: 'Blog', path: '/blog' },
  {
    label: 'Others',
    mega: true,
    columns: [
      {
        heading: 'Academic',
        items: [
          { label: 'Foundation', path: '/others/foundation' },
          { label: 'University', path: '/others/university' },
          { label: 'Publication', path: '/others/publication' },
          { label: 'Notice', path: '/others/notice' },
        ],
      },
      {
        heading: 'Policies',
        items: [
          { label: 'Privacy & Policy', path: '/others/privacy-policy' },
          { label: 'Term & Condition', path: '/others/terms' },
          { label: 'Download', path: '/others/download' },
        ],
      },
    ],
  },
  { label: 'Contact Us', path: '/contact' },
];

/* ── Regular small dropdown ── */
const DropdownMenu = ({ items }) => (
  <div className="absolute left-0 z-50 pt-3" style={{ top: '100%' }}>
    <ul className="w-48 bg-white rounded-lg overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
      {items.map((item) => (
        <li key={item.label}>
          <NavLink
            to={item.path}
            end
            className="block px-5 py-3 text-sm font-medium transition-colors"
            style={({ isActive }) => ({
              backgroundColor: isActive ? 'var(--color-secondary)' : 'white',
              color: isActive ? '#ffffff' : '#11141B',
            })}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              const active = e.currentTarget.getAttribute('aria-current');
              if (!active) {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#11141B';
              }
            }}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

/* ── Mega menu — absolute child of nav, centered ── */
const MegaMenu = ({ columns }) => (
  <div
    className="absolute z-40 left-1/2 -translate-x-1/2"
    style={{ top: '85%', width: '900px' }}
  >
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
      <div className="flex h-[420px]">

        {/* Left half — columns */}
        <div className="flex flex-1 divide-x divide-gray-100">
          {columns.map((col) => (
            <div key={col.heading} className="flex-1 px-8 py-7">
              <p className="font-bold uppercase tracking-widest mb-4 text-secondary">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-0.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.path}
                      end
                      className="block px-5 py-3 text-sm font-medium transition-colors rounded-lg"
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? 'var(--color-secondary)' : 'white',
                        color: isActive ? '#ffffff' : '#11141B',
                      })}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={e => {
                        const active = e.currentTarget.getAttribute('aria-current');
                        if (!active) {
                          e.currentTarget.style.backgroundColor = 'white';
                          e.currentTarget.style.color = '#11141B';
                        }
                      }}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right half — image */}
        <div className="w-1/2 overflow-hidden p-8">
          <img
            src={visvaBanglaMenuImg}
            alt="Visva Bangla"
            className="w-full h-full object-cover rounded"
          />
        </div>

      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════ */
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  const isHomePage = location.pathname === '/';
  // Opaque (white bg) when: not on home page, OR on home page after scrolling
  const isOpaque = !isHomePage || isSticky;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = () => {
    dispatch(logout());
    toast.success('Signed out successfully.');
    navigate('/');
  };

  const isParentActive = (link) => {
    if (!link.children && !link.columns) return false;
    const allChildren = link.children || link.columns?.flatMap(c => c.items) || [];
    return allChildren.some(child => location.pathname.startsWith(child.path));
  };

  const toggleAccordion = (label) => {
    setMobileAccordion(prev => prev === label ? null : label);
  };

  const activeMega = navLinks.find(l => l.mega && openDropdown === l.label);

  return (
    <>
      {/* ── Main navbar ── */}
      <nav
        className={`w-full z-50 transition-all duration-300 ${
          isHomePage
            ? isSticky
              ? 'fixed top-0 left-0 bg-white shadow-md'
              : 'absolute top-0 left-0 bg-transparent'
            : 'fixed top-0 left-0 bg-white shadow-md'
        }`}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <div className="max-w-340 mx-auto flex items-center justify-between px-4 lg:px-8 py-4">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={visvaBangala} alt="Visva Bangla" className="h-10 w-auto object-contain" />
            <span className={`pl-1 text-xl lg:text-2xl font-medium uppercase ${isOpaque ? 'text-secondary' : 'text-white/90'}`}>
              VisvaBangla
            </span>
          </NavLink>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => (link.children || link.mega) && setOpenDropdown(link.label)}
              >
                {link.mega ? (
                  /* "Others" — mega trigger, no route */
                  <span
                    className={`flex items-center gap-1 text-sm lg:text-base font-medium cursor-pointer transition-opacity relative pb-1 ${
                      isParentActive(link) ? 'opacity-100' : 'hover:opacity-70'
                    }`}
                    style={{
                      color: isOpaque ? '#11141B' : '#fff',
                      fontWeight: (openDropdown === link.label || isParentActive(link)) ? '600' : '500',
                    }}
                  >
                    {link.label}
                    <MdKeyboardArrowDown
                      size={16}
                      style={{
                        transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s',
                      }}
                    />
                    {/* Underline for active mega parent */}
                    {isParentActive(link) && (
                      <span
                        className="absolute bottom-0 left-0 w-full h-0.5"
                        style={{ backgroundColor: 'var(--color-secondary)' }}
                      />
                    )}
                  </span>
                ) : (
                  /* Regular nav link */
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className="flex items-center gap-1 text-sm lg:text-base font-medium transition-opacity relative pb-1 hover:opacity-70"
                    style={({ isActive }) => ({
                      color: isOpaque ? '#11141B' : '#fff',
                      fontWeight: (isActive || isParentActive(link)) ? '600' : '500',
                    })}
                    onMouseEnter={() => !link.children && setOpenDropdown(null)}
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {link.children && (
                          <MdKeyboardArrowDown
                            size={16}
                            style={{
                              transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0)',
                              transition: 'transform 0.2s',
                            }}
                          />
                        )}
                        {/* Underline for active state */}
                        {(isActive || isParentActive(link)) && (
                          <span
                            className="absolute bottom-0 left-0 w-full h-0.5"
                            style={{ backgroundColor: 'var(--color-secondary)' }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                )}

                {/* Regular dropdown */}
                {link.children && openDropdown === link.label && (
                  <DropdownMenu items={link.children} />
                )}
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            {token ? (
              <>
                <NavLink
                  to="/admin"
                  className="px-5 py-2 rounded-full font-medium text-white bg-secondary hover:bg-primary transition-all duration-300"
                >
                  Admin Panel
                </NavLink>
                <button
                  onClick={handleSignOut}
                  className="px-5 py-2 rounded-full font-medium border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <NavLink
                to="/auth/signin"
                className="px-5 py-2 rounded-full font-medium border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out"
              >
                Sign In
              </NavLink>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg bg-[#f5f5f0]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <RxHamburgerMenu size={22} color="#11141B" />
          </button>
        </div>

        {/* Mega menu — direct child of nav, absolute from nav center */}
        {activeMega && <MegaMenu columns={activeMega.columns} />}
      </nav>

      {/* ── Mobile drawer overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile drawer ── */}
      <div
        className="fixed top-0 right-0 h-full w-72 z-60 md:hidden flex flex-col bg-[#f5f5f0] transition-transform duration-300 overflow-y-auto"
        style={{ transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5">
          <NavLink to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <img src={visvaBangala} alt="Visva Bangla" className="h-10 w-auto object-contain" />
          </NavLink>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/60 text-white"
            aria-label="Close menu"
          >
            <IoClose size={20} />
          </button>
        </div>

        {/* Drawer nav links */}
        <ul className="flex flex-col px-6 mt-2 gap-1">
          {navLinks.map((link) => {
            const allChildren = link.children
              ? link.children
              : link.mega
              ? link.columns?.flatMap(col => [
                  { label: col.heading, path: null, isHeading: true },
                  ...col.items,
                ])
              : null;

            return (
              <li key={link.label}>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  {link.mega ? (
                    <span
                      className="text-base font-medium"
                      style={{ color: '#11141B', fontWeight: isParentActive(link) ? '600' : '500' }}
                    >
                      {link.label}
                    </span>
                  ) : (
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className="text-base font-medium"
                      style={({ isActive }) => ({
                        color: '#11141B',
                        fontWeight: (isActive || isParentActive(link)) ? '600' : '500',
                      })}
                      onClick={() => !allChildren && setMobileOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  )}
                  {allChildren && (
                    <button onClick={() => toggleAccordion(link.label)} aria-label="Toggle submenu">
                      <MdKeyboardArrowDown
                        size={20}
                        color="#11141B"
                        style={{
                          transform: mobileAccordion === link.label ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.2s',
                        }}
                      />
                    </button>
                  )}
                </div>

                {allChildren && mobileAccordion === link.label && (
                  <ul className="mx-2 my-2 rounded-lg overflow-hidden bg-white border border-gray-200">
                    {allChildren.map((child) =>
                      child.isHeading ? (
                        <li key={child.label}>
                          <p className="px-4 pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-secondary">
                            {child.label}
                          </p>
                        </li>
                      ) : (
                        <li key={child.label}>
                          <NavLink
                            to={child.path}
                            end
                            className="block px-4 py-2.5 text-sm"
                            style={({ isActive }) => ({
                              color: '#11141B',
                              fontWeight: isActive ? '600' : '400',
                            })}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile auth buttons */}
        <div className="px-6 pt-4 pb-6 flex flex-col gap-3 border-t border-gray-200 mt-4">
          {token ? (
            <>
              <NavLink
                to="/admin"
                onClick={() => setMobileOpen(false)}
                className="block text-center py-2.5 rounded-full text-white text-sm font-medium bg-secondary"
              >
                Admin Panel
              </NavLink>
              <button
                onClick={() => { handleSignOut(); setMobileOpen(false); }}
                className="w-full py-2.5 rounded-full border border-secondary text-secondary text-sm font-medium"
              >
                Sign Out
              </button>
            </>
          ) : (
            <NavLink
              to="/auth/signin"
              onClick={() => setMobileOpen(false)}
              className="block text-center py-2.5 rounded-full text-white text-sm font-medium bg-secondary"
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
