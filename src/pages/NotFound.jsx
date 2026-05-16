import { NavLink } from 'react-router-dom';
import { GiLotus } from 'react-icons/gi';
import visvaBangala from '../assets/logo/visva-bangala.png';

const quickLinks = [
  { label: 'Home',       path: '/' },
  { label: 'About Us',   path: '/about' },
  { label: 'Media',      path: '/media' },
  { label: 'Blog',       path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f8fa]">


      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl w-full">

          {/* Left — 404 visual */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/2">

            {/* Big number */}
            <div className="relative select-none">
              <span className="text-[10rem] lg:text-[13rem] font-black leading-none text-gray-100">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mt-4">
                  <GiLotus size={48} className="text-primary" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#11141B]">
                Page Not Found
              </h1>
              <p className="text-gray-500 leading-relaxed max-w-sm">
                The path you're looking for doesn't exist or has been moved. Let us guide you back to the right direction.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <NavLink
                to="/"
                className="px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                ← Back to Home
              </NavLink>
              <NavLink
                to="/contact"
                className="px-6 py-3 rounded-full border border-secondary text-secondary text-sm font-semibold hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Right — quick links */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_24px_rgba(0,0,0,0.06)] p-8 flex flex-col gap-6">

              {/* Logo */}
              <NavLink to="/" className="flex items-center gap-2 w-fit">
                <img src={visvaBangala} alt="Visva Bangla" className="h-9 w-auto object-contain" />
                <span className="text-base font-bold uppercase text-primary">VisvaBangla</span>
              </NavLink>

              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                  You might be looking for
                </p>
                <h2 className="text-xl font-bold text-[#11141B]">Popular Pages</h2>
              </div>

              <ul className="flex flex-col gap-2">
                {quickLinks.map((l, i) => (
                  <li key={i}>
                    <NavLink
                      to={l.path}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-[#f7f8fa] border border-gray-100 hover:border-secondary/30 hover:bg-secondary/5 transition-all duration-200 group"
                    >
                      <span className="text-sm font-medium text-[#11141B] group-hover:text-secondary transition-colors">
                        {l.label}
                      </span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                        className="text-gray-300 group-hover:text-secondary group-hover:translate-x-0.5 transition-all duration-200">
                        <path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Registration note */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 leading-relaxed text-center">
                  VisvaBangla Foundation — Reg. No: 1012/15<br />
                  Ministry of Social Welfare, Govt. of Bangladesh
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default NotFound;
