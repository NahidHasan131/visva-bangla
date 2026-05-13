import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiMeditation, GiLotus } from 'react-icons/gi';
import { MdSelfImprovement } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { LuBookOpen } from 'react-icons/lu';
import { PiHandsPrayingLight } from 'react-icons/pi';
import aboutImg from '../../assets/visvaBanglaAboutImg.jpeg';

const learningCards = [
  {
    icon: <GiLotus />,
    title: 'Yoga & Meditation',
    desc: 'Structured sessions for inner calm, self-purification, and spiritual awakening for all levels.',
  },
  {
    icon: <MdSelfImprovement />,
    title: 'Spiritual Growth',
    desc: 'Universal Sufi-inspired programs blending ancient wisdom with modern humanitarian values.',
  },
  {
    icon: <GiMeditation />,
    title: 'Free Education',
    desc: 'Knowledge, research, and spiritual guidance freely available to every seeker regardless of background.',
  },
];

const highlights = [
  {
    icon: <TbWorld size={18} />,
    label: 'Universal Humanitarian Philosophy',
  },
  {
    icon: <PiHandsPrayingLight size={18} />,
    label: 'Free Meditation & Spiritual Education',
  },
  {
    icon: <LuBookOpen size={18} />,
    label: 'Research, Culture & Human Development',
  },
];

const AboutUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* ── 1. Badge + Heading ── */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Universal Humanitarian Philosophy
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight max-w-2xl">
            VisvaBangla<span className="text-primary">Foundation</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl">
            A non-political, non-communal spiritual organization dedicated to meditation,
            self-purification, universal knowledge, and human welfare — based in Rajshahi, Bangladesh.
          </p>
        </div>

        {/* ── 2. Learning cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {learningCards.map((card, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-5 p-7 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.75] bg-linear-to-r from-primary to-secondary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-13 h-13 rounded-2xl flex items-center justify-center bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {React.cloneElement(card.icon, { size: 26 })}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-[#11141B] tracking-tight">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
              <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs font-semibold text-secondary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. Image left + Content right ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="lg:w-5/12 w-full relative">
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <img
                src={aboutImg}
                alt="VisvaBanglaFoundation"
                className="w-full h-120 object-cover"
              />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <GiLotus size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 leading-none mb-0.5">Established</p>
                <p className="text-sm font-bold text-[#11141B]">Since 2015</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-7/12 w-full flex flex-col gap-6">

            <div className="flex flex-col gap-3">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
                About the Foundation
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#11141B] leading-snug">
                A Vision for Universal <br />
                <span className="text-secondary">Peace & Spiritual Freedom</span>
              </h3>
            </div>

            <p className="text-gray-500 leading-relaxed text-[15px]">
              Founded by <span className="font-semibold text-[#11141B]">Dr. Shah Syed Hasib Ul Hasan Raza</span>, VisvaBangla Foundation is a registered humanitarian organization under the Ministry of Social Welfare, Government of Bangladesh <span className="text-gray-400">(Reg. No: 1012/15, July 13, 2015)</span>.
            </p>

            <p className="text-gray-500 leading-relaxed text-[15px]">
              Inspired by the timeless wisdom of Sufi philosophy and universal humanitarian values, the foundation is working toward the establishment of the <span className="font-semibold text-[#11141B]">VisvaBangla Spiritual University</span> — a unique, completely free platform for meditation, knowledge, and spiritual education open to all people regardless of religion, class, or background.
            </p>

            {/* Highlight points */}
            <ul className="flex flex-col gap-3 mt-1">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/8 text-primary flex items-center justify-center shrink-0">
                    {h.icon}
                  </span>
                  <span className="text-sm font-medium text-[#11141B]">{h.label}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <NavLink
                to="/blog"
                className="px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Learn More
              </NavLink>
              <NavLink
                to="/about"
                className="px-6 py-3 rounded-full border border-secondary text-secondary text-sm font-semibold hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Explore Vision
              </NavLink>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
