import { NavLink } from 'react-router-dom';
import { MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from 'react-icons/md';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { TbBrandX } from 'react-icons/tb';
import visvaBangala from '../../assets/logo/visva-bangala.png';

const quickLinks = [
  { label: 'Home',        path: '/' },
  { label: 'About Us',    path: '/about' },
  { label: 'Our Trainers',path: '/about/trainer' },
  { label: 'Media',       path: '/media' },
  { label: 'Blog',        path: '/blog' },
  { label: 'Contact Us',  path: '/contact' },
];

const programs = [
  { label: 'Free Meditation Sessions', path: '/media/audio' },
  { label: 'Spiritual Education',      path: '/media' },
  { label: 'Yoga Classes',             path: '/media/video' },
  { label: 'Sufi Philosophy Programs', path: '/media/audio' },
  { label: 'Research & Publications',  path: '/others/publication' },
  { label: 'Gallery',                  path: '/media/gallery' },
];

const others = [
  { label: 'Foundation',    path: '/others/foundation' },
  { label: 'University',    path: '/others/university' },
  { label: 'Notice',        path: '/others/notice' },
  { label: 'Privacy Policy',path: '/others/privacy-policy' },
  { label: 'Term & Condition', path: '/others/terms' },
  { label: 'Download',      path: '/others/download' },
];

const socials = [
  { icon: <FaFacebookF size={14} />, href: '#', label: 'Facebook' },
  { icon: <FaYoutube size={14} />,   href: '#', label: 'YouTube' },
  { icon: <TbBrandX size={14} />,    href: '#', label: 'X' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-gray-400">

      {/* Main footer */}
      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2">
              <img src={visvaBangala} alt="Visva Bangla" className="h-10 w-auto object-contain" />
              <span className="text-lg font-bold uppercase text-primary">VisvaBangla</span>
            </NavLink>

            <p className="text-sm leading-relaxed text-gray-400">
              Universal Humanitarian Philosophy Institute of Meditation, Knowledge, Education and Spiritual Guidance — Rajshahi, Bangladesh.
            </p>

            {/* Contact info */}
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MdOutlineLocationOn size={16} className="text-secondary shrink-0 mt-0.5" />
                <span>Shiroil Colony, Ghoramara, Boalia, Rajshahi, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdOutlineEmail size={16} className="text-secondary shrink-0" />
                <a href="mailto:info@visvabangla.org" className="hover:text-white transition-colors">
                  info@visvabangla.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MdOutlinePhone size={16} className="text-secondary shrink-0" />
                <a href="tel:+8801700000000" className="hover:text-white transition-colors">
                  +880 1700 000000
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.path}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-secondary transition-colors shrink-0" />
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Programs ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Programs</h4>
            <ul className="flex flex-col gap-2.5">
              {programs.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.path}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-secondary transition-colors shrink-0" />
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Others ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Others</h4>
            <ul className="flex flex-col gap-2.5">
              {others.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.path}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-secondary transition-colors shrink-0" />
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Reg info */}
            <div className="mt-2 p-4 rounded-xl bg-white/5 border border-white/8">
              <p className="text-xs text-gray-500 leading-relaxed">
                Registered under Ministry of Social Welfare, Govt. of Bangladesh<br />
                <span className="text-gray-400 font-medium">Reg. No: 1012/15 &nbsp;|&nbsp; July 13, 2015</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8">
        <div className="max-w-340 mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© 2026 VisvaBangla Foundation. All Rights Reserved.</span>
          <span>Universal Humanitarian Philosophy Institute — Rajshahi, Bangladesh</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
