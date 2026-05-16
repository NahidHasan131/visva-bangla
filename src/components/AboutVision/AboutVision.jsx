import React from 'react';
import { TbWorld } from 'react-icons/tb';
import { PiHandsPrayingLight } from 'react-icons/pi';
import { LuBookOpen, LuGraduationCap } from 'react-icons/lu';
import { GiLotus } from 'react-icons/gi';
import visionImg from '../../assets/spritual- university.jpg';

const visionPoints = [
  {
    icon: <TbWorld size={18} />,
    title: 'Universal Family',
    desc: 'The whole world is one family. The foundation works globally to spread the light of universal education and spiritual guidance.',
  },
  {
    icon: <GiLotus size={18} />,
    title: 'World Human Religion Center',
    desc: 'Establishing a safe, service-oriented residential meditation center open to people from all walks of life.',
  },
  {
    icon: <LuGraduationCap size={18} />,
    title: 'VisvaBangla Spiritual University',
    desc: 'A free, non-communal university of meditation, knowledge, and spiritual guidance — inspired by ancient centers like Nalanda and Taxila.',
  },
  {
    icon: <PiHandsPrayingLight size={18} />,
    title: 'Sufi & Spiritual Education',
    desc: 'Weekly classes, free meditation sessions, and Sufi spiritual education programs for laborers, artisans, and ordinary people deprived of formal education.',
  },
  {
    icon: <LuBookOpen size={18} />,
    title: 'Research & Publications',
    desc: 'Press, publication centers, research journals, and media platforms to spread universal humanitarian philosophy.',
  },
];

const AboutVision = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#f7f8fa]">
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left content */}
          <div className="lg:w-1/2 flex flex-col gap-8">

            <div className="flex flex-col gap-3">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                Our Vision
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
                The Purpose Behind <br />
                <span className="text-primary">VisvaBangla Foundation</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Inspired by more than fifteen years of research, the foundation envisions a peaceful, compassionate, and non-communal world through the study, research, and publication of the philosophies of great human beings throughout history.
              </p>
            </div>

            {/* Vision statement quote */}
            <blockquote className="relative pl-5 border-l-4 border-primary">
              <p className="text-[#11141B] font-medium text-[15px] leading-relaxed italic">
                "Nowhere in the world has a university been established solely for the free distribution of universal humanitarian and spiritual meditation-based knowledge dedicated to self-purification. We dream of building a peaceful, compassionate, and non-communal world."
              </p>
              <footer className="mt-2 text-sm text-gray-400 font-medium">
                — Dr. S. M. Hasib Ul Hasan, Founder
              </footer>
            </blockquote>

            {/* Vision points */}
            <ul className="flex flex-col gap-4">
              {visionPoints.map((v, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="mt-0.5 w-9 h-9 rounded-xl bg-white border border-gray-200 text-secondary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-200">
                    {v.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#11141B]">{v.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right image */}
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <img
                src={visionImg}
                alt="Our vision"
                className="w-full h-145 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent rounded-3xl" />
            </div>
            {/* floating stat */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">300+</p>
                <p className="text-xs text-gray-500">Regular Participants</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">15+</p>
                <p className="text-xs text-gray-500">Years of Research</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#11141B]">2015</p>
                <p className="text-xs text-gray-500">Year Established</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVision;
