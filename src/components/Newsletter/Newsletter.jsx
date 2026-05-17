import { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { GiLotus } from 'react-icons/gi';
import { TbBell, TbCheck } from 'react-icons/tb';
import newsletterImg from '../../assets/newsletter.png';

const highlights = [
  'Free Meditation Alerts',
  'Weekly Class Schedule',
  'Event Announcements',
];

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="max-w-340 mx-auto px-6 lg:px-12 mt-24">
      <div
        className="relative rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-72"
        style={{ background: 'linear-gradient(135deg, var(--color-secondary) 0%, #047f82 60%, #035f62 100%)' }}
      >
        {/* bg decoration circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-10 right-32 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-8 left-1/2 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />

        {/* Left — image */}
        <div className="md:w-5/12 hidden md:block relative overflow-hidden">
          {/* overlay bg — behind image */}
          <div className="absolute inset-0 z-0 bg-linear-to-r from-transparent via-transparent to-secondary/80" />
          <img
            src={newsletterImg}
            alt="Stay Connected"
            className="relative z-10 w-full h-full object-cover object-center opacity-90"
          />
        </div>

        {/* Right — content */}
        <div className="md:w-7/12 relative z-10 flex flex-col justify-center gap-6 px-8 lg:px-14 py-12">

          {/* Badge */}
          <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            <TbBell size={13} />
            Stay Connected
          </span>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl lg:text-4xl font-bold text-white leading-snug">
              Get Updates on Free Classes,
              <br />
              <span className="text-white/80">Events & Spiritual Programs</span>
            </h2>
            <p className="text-white/65 text-sm leading-relaxed max-w-md">
              Subscribe to receive announcements about free meditation sessions, spiritual education programs, weekly classes, and humanitarian activities from Bishwabangla Foundation.
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/12 border border-white/20 text-xs text-white font-medium"
              >
                <GiLotus size={12} className="text-white/70" />
                {item}
              </span>
            ))}
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-sm max-w-md">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <TbCheck size={16} className="text-secondary" />
              </span>
              <p className="text-sm text-white font-medium">
                Thank you! We'll keep you updated on all programs.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="flex-1 flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/15 border border-white/25 backdrop-blur-sm focus-within:bg-white/20 focus-within:border-white/40 transition-all duration-200">
                <MdOutlineEmail size={16} className="text-white/60 shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/40 outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-white text-secondary text-sm font-bold hover:bg-white/90 active:scale-95 transition-all duration-200 shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-white/40">
            No spam. Only meaningful updates. Unsubscribe anytime.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
