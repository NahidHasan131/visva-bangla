import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiLotus } from 'react-icons/gi';
import { TbWorld, TbBuildingCommunity, TbHeartHandshake } from 'react-icons/tb';
import { LuSprout, LuUsers, LuScale, LuGraduationCap, LuBookOpen } from 'react-icons/lu';
import { MdOutlineHealthAndSafety, MdOutlineVolunteerActivism } from 'react-icons/md';
import { PiHandsPrayingLight } from 'react-icons/pi';
import { fadeIn, fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from '../../lib/motion';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import aboutImg from '../../assets/visvaBanglaAboutImg.jpeg';
import visionImg from '../../assets/spritual- university.png';

const objectives = [
  { num: '01', icon: <TbWorld size={16} />,                    title: 'Universal Family & Global Outreach',       desc: 'The whole world is one family. The foundation works globally to spread the light of universal education and spiritual guidance, following great souls who devoted their lives to the spiritual and humanitarian development of humanity.' },
  { num: '02', icon: <LuSprout size={16} />,                   title: 'Self-Reliance & Empowerment',              desc: 'Making spiritually guided individuals self-reliant through self-employment initiatives and vocational training for skill development.' },
  { num: '03', icon: <PiHandsPrayingLight size={16} />,        title: 'Global Humanitarian Leadership',           desc: 'Creating global humanitarian leaders dedicated to world peace by promoting a non-communal world and advancing the path of self-liberation beyond personal or sectarian identity.' },
  { num: '04', icon: <TbBuildingCommunity size={16} />,        title: 'Education & Institutions',                 desc: 'Establishing libraries, schools, colleges, universities, press and publication centers, and media platforms including websites, radio stations, and television channels.' },
  { num: '05', icon: <LuGraduationCap size={16} />,            title: 'World Human Religion Center',              desc: 'Establishing a safe and service-oriented residential meditation center named the "World Human Religion Center" for people from all walks of life.' },
  { num: '06', icon: <LuBookOpen size={16} />,                 title: 'Education, Culture & Technology',          desc: 'Working in the fields of education, culture, and technology to establish truth and beauty in human life through the harmonious integration of these disciplines.' },
  { num: '07', icon: <LuUsers size={16} />,                    title: 'Youth & Community Development',            desc: 'Transforming the younger generation into skilled human resources and empowering adolescents through training and socio-economic participation.' },
  { num: '08', icon: <MdOutlineHealthAndSafety size={16} />,   title: 'Healthcare & Social Welfare',              desc: 'Establishing charitable medical centers, maternal and child healthcare services, and rehabilitation programs for the poor and disabled.' },
  { num: '09', icon: <LuScale size={16} />,                    title: 'Legal Aid & Human Rights',                 desc: 'Providing legal assistance to underprivileged people and raising legal awareness through social and human rights-based educational programs.' },
  { num: '10', icon: <TbHeartHandshake size={16} />,           title: 'Child Rights & Protection',                desc: 'Raising awareness and public opinion regarding child labor, child trafficking, children\'s rights, and opportunities for children\'s self-development.' },
  { num: '11', icon: <MdOutlineVolunteerActivism size={16} />, title: 'Environmental & Social Action',            desc: 'Undertaking afforestation, sanitation, anti-drug campaigns, and awareness programs for environmental development and social harmony.' },
  { num: '12', icon: <TbBuildingCommunity size={16} />,        title: 'Collaboration & Coordination',             desc: 'Working as a supporting and coordinating organization in collaboration with government, semi-government, and voluntary institutions.' },
];

const committee = [
  { role: 'President',                        name: 'Dr. S. M. Hasib Ul Hasan' },
  { role: 'Vice President',                   name: 'S. M. Mostafizur Rahman' },
  { role: 'General Secretary',                name: 'Md. Sadek Ali' },
  { role: 'Secretary, Industry & Technology', name: 'Md. Shahadat Hossain' },
  { role: 'Secretary, Education & Culture',   name: 'Md. Naeem Imtiaz' },
  { role: 'Secretary, Research & Publications', name: 'Mst. Sumaiya Akhtar' },
  { role: 'Organizational Secretary',         name: 'Mst. Mullika Bibi' },
  { role: 'Treasurer',                        name: 'Md. Mahabub Rahman' },
  { role: 'Office Secretary',                 name: 'Md. Sohel Islam Ripon' },
];

const Foundation = () => (
  <div>
    <Breadcrumb />

    {/* ── 1. Hero intro ── */}
    <motion.section
      className="py-16 lg:py-24 bg-white"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — content */}
          <motion.div className="lg:w-1/2 flex flex-col gap-7"
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>

            <div className="flex flex-col gap-3">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                VisvaBangla Foundation
              </span>
              <h1 className="text-4xl lg:text-5xl font-semibold text-[#11141B] leading-tight">
                Universal Humanitarian <br />
                <span className="text-primary">Philosophy Institute</span>
              </h1>
              <p className="text-gray-400 text-sm">
                Institute of Meditation, Knowledge, Education and Spiritual Guidance — Rajshahi, Bangladesh
              </p>
            </div>

            <p className="text-gray-500 text-[15px] leading-relaxed">
              After many years of research in education, art, and literature,{' '}
              <span className="font-semibold text-[#11141B]">Dr. Shah Syed Hasib Ul Hasan Raza</span>{' '}
              established the social and cultural organization named <span className="font-semibold text-[#11141B]">VisvaBanglaFoundation</span> with the vision of creating institutions such as the World Human Religion Center, World Meditation Center, and VisvaBanglaSpiritual University — based on a universal, non-communal, non-political, and deeply humanitarian philosophy of life focused on meditation, knowledge, education, spiritual guidance, research, and publications.
            </p>

            <p className="text-gray-500 text-[15px] leading-relaxed">
              The organization was officially registered under the Ministry of Social Welfare of the Government of the People's Republic of Bangladesh through the District Social Services Office, Rajshahi.
            </p>

            {/* Registration card */}
            <div className="rounded-2xl bg-[#f7f8fa] border border-gray-100 px-6 py-5 flex flex-col gap-2">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Official Registration</p>
              <p className="text-sm font-bold text-[#11141B]">Ministry of Social Welfare</p>
              <p className="text-sm text-gray-500">Government of the People's Republic of Bangladesh</p>
              <p className="text-sm text-gray-500">
                Reg. No: <span className="font-semibold text-[#11141B]">1012/15</span>
                &nbsp;|&nbsp; Date: <span className="font-semibold text-[#11141B]">July 13, 2015</span>
              </p>
              <div className="mt-2 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Address</p>
                <p className="text-sm text-gray-500">Shiroil Colony, Post Office: Ghoramara,<br />Police Station: Boalia, District: Rajshahi, Bangladesh</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <NavLink to="/contact"
                className="px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300">
                Get Involved
              </NavLink>
              <NavLink to="/others/university"
                className="px-6 py-3 rounded-full border border-secondary text-secondary text-sm font-semibold hover:bg-secondary hover:text-white transition-all duration-300">
                Spiritual University
              </NavLink>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div className="lg:w-1/2 relative"
            variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <img src={aboutImg} alt="VisvaBanglaFoundation" className="w-full h-125 object-cover" />
            </div>
            {/* floating stats */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">300+</p>
                <p className="text-xs text-gray-500">Participants</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">100%</p>
                <p className="text-xs text-gray-500">Free of Cost</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#11141B]">2015</p>
                <p className="text-xs text-gray-500">Established</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* ── 2. Nature & Character ── */}
    <motion.section
      className="py-14 bg-secondary"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <motion.div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold uppercase tracking-widest">
            Nature & Character
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
            A Non-Political, Non-Profit, Non-Governmental Organization
          </h2>
          <p className="text-white/75 text-[15px] leading-relaxed">
            This organization operates as a voluntary organization dedicated to improving human life and society. Its operational area initially covers the Rajshahi district, with the potential to expand to other districts and sub-districts with the approval of the registration authority.
          </p>
          <blockquote className="mt-2 pl-5 border-l-4 border-white/40 text-left">
            <p className="text-white/80 text-sm italic leading-relaxed">
              "Nowhere in the world has a university been established solely for the free distribution of universal humanitarian and spiritual meditation-based knowledge dedicated to self-purification. We dream of building a peaceful, compassionate, and non-communal world."
            </p>
            <footer className="mt-2 text-white/50 text-xs font-medium">— Dr. S. M. Hasib Ul Hasan, Founder</footer>
          </blockquote>
        </motion.div>
      </div>
    </motion.section>

    {/* ── 3. Goals & Objectives ── */}
    <motion.section
      className="py-16 lg:py-24 bg-[#f7f8fa]"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        <motion.div className="flex flex-col items-center text-center gap-3 mb-14"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Goals & Objectives
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#11141B]">
            Our Commitment to <span className="text-secondary">Humanity & Society</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            According to the constitution approved by the District Social Services Office of the Government of Bangladesh, the aims, objectives, and ideals of VisvaBanglaFoundation are as follows:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={staggerContainer(0.07)} initial="hidden" whileInView="show" viewport={viewport}
        >
          {objectives.map((v, i) => (
            <motion.div key={i} variants={fadeUp}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-secondary/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200 group">
              <div className="shrink-0 flex flex-col items-center gap-1 pt-0.5">
                <span className="text-xs font-bold text-primary">{v.num}</span>
                <span className="w-8 h-8 rounded-lg bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  {v.icon}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#11141B]">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>

    {/* ── 4. Vision image section ── */}
    <motion.section
      className="py-16 lg:py-24 bg-white"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          <motion.div className="lg:w-1/2 relative"
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <img src={visionImg} alt="VisvaBanglaSpiritual University" className="w-full h-125 object-cover" />
            </div>
            
          </motion.div>

          <motion.div className="lg:w-1/2 flex flex-col gap-6"
            variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
              Experimental Activities
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11141B] leading-snug">
              VisvaBanglaSpiritual University — <span className="text-primary">A Dream for All</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Inspired by the approximately four-thousand-year-old heritage of the Barind region and the ancient centers of learning such as Nalanda, Taxila, Somapura Mahavihara, Mahasthangarh, and Mainamati, we are preparing to launch the experimental activities of the "VisvaBanglaSpiritual University."
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              This initiative is the result of more than fifteen years of research aimed at establishing a university based on universal humanitarian meditation, knowledge, education, and spiritual guidance for self-development and self-purification — especially for non-communal Sufi-oriented spiritual seekers.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Already, approximately <span className="font-semibold text-[#11141B]">300+ participants</span> from Rajshahi and surrounding regions — including Sufi practitioners, spiritual seekers, laborers, and ordinary non-communal people — have been attending weekly thematic humanitarian philosophy classes, free meditation sessions, and Sufi spiritual education programs regularly.
            </p>
            <NavLink to="/others/university"
              className="self-start px-6 py-3 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-all duration-300">
              Learn About the University
            </NavLink>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* ── 5. Current Committee ── */}
    <motion.section
      className="py-16 lg:py-24 bg-[#f7f8fa]"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        <motion.div className="flex flex-col items-center text-center gap-3 mb-12"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
            Leadership
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#11141B]">Current Committee</h2>
          <p className="text-gray-500 text-sm max-w-md">
            The dedicated team guiding VisvaBanglaFoundation toward its humanitarian and spiritual mission.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer()} initial="hidden" whileInView="show" viewport={viewport}
        >
          {committee.map((m, i) => (
            <motion.div key={i} variants={fadeUp}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary font-bold text-base flex items-center justify-center shrink-0">
                {m.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-[#11141B] leading-snug">{m.name}</p>
                <p className="text-xs text-gray-400 leading-snug mt-0.5">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex justify-center mt-10"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <NavLink to="/contact"
            className="px-8 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300">
            Contact the Foundation
          </NavLink>
        </motion.div>
      </div>
    </motion.section>
  </div>
);

export default Foundation;
