import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineHealthAndSafety, MdOutlineVolunteerActivism } from 'react-icons/md';
import { LuScale, LuSprout, LuUsers } from 'react-icons/lu';
import { TbBuildingCommunity } from 'react-icons/tb';
import aboutImg from '../../assets/goals-left-img.jpg';

const objectives = [
  {
    num: '01',
    icon: <LuSprout size={16} />,
    title: 'Self-Reliance & Empowerment',
    desc: 'Making spiritually guided individuals self-reliant through self-employment initiatives and vocational training for skill development.',
  },
  {
    num: '02',
    icon: <TbBuildingCommunity size={16} />,
    title: 'Education & Institutions',
    desc: 'Establishing libraries, schools, colleges, universities, press and publication centers, and media platforms to spread universal humanitarian philosophy.',
  },
  {
    num: '03',
    icon: <LuUsers size={16} />,
    title: 'Youth & Community Development',
    desc: 'Transforming the younger generation into skilled human resources and empowering adolescents through training and socio-economic participation.',
  },
  {
    num: '04',
    icon: <LuScale size={16} />,
    title: 'Legal Aid & Human Rights',
    desc: 'Providing legal assistance to underprivileged people and raising legal awareness through social and human rights-based educational programs.',
  },
  {
    num: '05',
    icon: <MdOutlineHealthAndSafety size={16} />,
    title: 'Healthcare & Social Welfare',
    desc: 'Establishing charitable medical centers, maternal and child healthcare services, and rehabilitation programs for the poor and disabled.',
  },
  {
    num: '06',
    icon: <MdOutlineVolunteerActivism size={16} />,
    title: 'Environmental & Social Action',
    desc: 'Undertaking afforestation, sanitation, anti-drug campaigns, and awareness programs for environmental development and social harmony.',
  },
];

const committee = [
  { role: 'President', name: 'Dr. S. M. Hasib Ul Hasan' },
  { role: 'Vice President', name: 'S. M. Mostafizur Rahman' },
  { role: 'General Secretary', name: 'Md. Sadek Ali' },
  { role: 'Secretary, Industry & Technology', name: 'Md. Shahadat Hossain' },
  { role: 'Secretary, Education & Culture', name: 'Md. Naeem Imtiaz' },
  { role: 'Secretary, Research & Publications', name: 'Mosha. Sumaiya Akhtar' },
  { role: 'Organizational Secretary', name: 'Mosha. Mullika Bibi' },
  { role: 'Treasurer', name: 'Md. Mahabub Rahman' },
  { role: 'Office Secretary', name: 'Md. Sohel Islam Ripon' },
];

const AboutValues = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* ── Goals & Objectives ── */}
        <div className="flex flex-col lg:flex-row gap-14 items-start mb-20">

          {/* Left image */}
          <div className="lg:w-2/5 w-full lg:sticky lg:top-28">
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
              <img
                src={aboutImg}
                alt="Our values"
                className="w-full h-125 object-cover"
              />
            </div>
            {/* Info card */}
            <div className="mt-5 rounded-2xl border border-gray-100 bg-[#f7f8fa] px-6 py-5 flex flex-col gap-1.5">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Registration</p>
              <p className="text-sm font-bold text-[#11141B]">Ministry of Social Welfare</p>
              <p className="text-sm text-gray-500">Government of the People's Republic of Bangladesh</p>
              <p className="text-sm text-gray-500">Reg. No: <span className="font-semibold text-[#11141B]">1012/15</span> &nbsp;|&nbsp; July 13, 2015</p>
              <div className="mt-2 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Address</p>
                <p className="text-sm text-gray-500">Shiroil Colony, Ghoramara, Boalia,<br />Rajshahi, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:w-3/5 flex flex-col gap-8">

            <div className="flex flex-col gap-3">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                Goals & Objectives
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
                Our Commitment to <br />
                <span className="text-secondary">Humanity & Society</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                According to the constitution approved by the District Social Services Office of the Government of Bangladesh, the aims, objectives, and ideals of Bishwabangla Foundation are as follows:
              </p>
            </div>

            <div className="flex flex-col gap-0">
              {objectives.map((v, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-5 py-5 group ${i < objectives.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  {/* Number + icon */}
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-primary">{v.num}</span>
                    <span className="w-8 h-8 rounded-lg bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      {v.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold text-[#11141B]">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <NavLink
              to="/contact"
              className="self-start px-7 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Get Involved
            </NavLink>
          </div>
        </div>

        {/* ── Current Committee ── */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
              Leadership
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11141B]">Current Committee</h2>
            <p className="text-gray-500 text-sm max-w-md">The dedicated team guiding Bishwabangla Foundation toward its humanitarian and spiritual mission.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {committee.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#f7f8fa] border border-gray-100 hover:border-secondary/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200"
              >
                {/* Avatar initial */}
                <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary font-bold text-base flex items-center justify-center shrink-0">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#11141B] leading-snug">{m.name}</p>
                  <p className="text-xs text-gray-400 leading-snug mt-0.5">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutValues;
