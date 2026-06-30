import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiLotus } from 'react-icons/gi';
import { TbWorld, TbFlame, TbBook2, TbUsers, TbSchool, TbHeartHandshake } from 'react-icons/tb';
import { LuGraduationCap, LuBookOpen, LuMicroscope, LuUsers } from 'react-icons/lu';
import { PiHandsPrayingLight, PiBookOpenTextLight } from 'react-icons/pi';
import { fadeIn, fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from '../../lib/motion';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import visionImg from '../../assets/The_Yoga_Institute.jpg';
import aboutImg from '../../assets/university-left-img.jpg';

const pillars = [
  { icon: <GiLotus size={22} />,           title: 'Meditation',          desc: 'Structured meditation programs rooted in universal humanitarian philosophy for self-purification and inner liberation.' },
  { icon: <LuBookOpen size={22} />,         title: 'Knowledge',           desc: 'Research-based spiritual and philosophical knowledge simplified and freely distributed to all seekers.' },
  { icon: <LuGraduationCap size={22} />,    title: 'Education',           desc: 'Free, open education for underprivileged working-class people deprived of formal learning opportunities.' },
  { icon: <PiHandsPrayingLight size={22} />, title: 'Spiritual Guidance', desc: 'Guidance from experienced Sufi practitioners, researchers, and respected spiritual teachers.' },
];

const features = [
  { icon: <TbWorld size={18} />,           label: 'Non-communal & Universal' },
  { icon: <TbFlame size={18} />,           label: 'Completely Free of Charge' },
  { icon: <LuMicroscope size={18} />,      label: 'Research-Based Curriculum' },
  { icon: <TbBook2 size={18} />,           label: 'Weekly & Monthly Classes' },
  { icon: <LuUsers size={18} />,           label: '150+ Regular Participants' },
  { icon: <TbSchool size={18} />,          label: 'Open to All Backgrounds' },
  { icon: <PiBookOpenTextLight size={18} />, label: 'Sufi & Spiritual Traditions' },
  { icon: <TbHeartHandshake size={18} />,  label: 'Voluntary Teaching Faculty' },
];

const regions = ['Rajshahi', 'Naogaon', 'Chapainawabganj', 'Natore', 'Kushtia'];

const University = () => (
  <div>
    <Breadcrumb />

    {/* ── 1. Hero ── */}
    <motion.section
      className="py-16 lg:py-24 bg-white"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left */}
          <motion.div className="lg:w-1/2 flex flex-col gap-7"
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>

            {/* Academic badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <LuGraduationCap size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Under VisvaBangla Foundation</p>
                <p className="text-xs text-secondary font-semibold">Est. Initiative · Rajshahi, Bangladesh</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                Experimental Activities Announced
              </span>
              <h1 className="text-4xl lg:text-5xl font-semibold text-[#11141B] leading-tight">
                VisvaBangla <br />
                <span className="text-secondary">Spiritual University</span>
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                Universal Humanitarian Philosophy Institute of Meditation, Knowledge, Education and Spiritual Guidance
              </p>
            </div>

            <p className="text-gray-500 text-[15px] leading-relaxed">
              Inspired by the approximately four-thousand-year-old heritage of the Barind region and the ancient centers of learning such as <span className="font-medium text-[#11141B]">Nalanda, Taxila, Somapura Mahavihara, Mahasthangarh, and Mainamati</span>, we are preparing to launch the experimental activities of the VisvaBangla Spiritual University under the initiative of VisvaBangla Foundation.
            </p>

            <p className="text-gray-500 text-[15px] leading-relaxed">
              This initiative is the outcome of more than <span className="font-semibold text-[#11141B]">fifteen years of research</span> aimed at establishing a university based on universal humanitarian meditation, knowledge, education, and spiritual guidance for self-development and self-purification — especially for non-communal Sufi-oriented spiritual seekers.
            </p>

            <div className="flex flex-wrap gap-3">
              <NavLink to="/contact"
                className="px-6 py-3 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-all duration-300">
                Join the Program
              </NavLink>
              <NavLink to="/others/foundation"
                className="px-6 py-3 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                About Foundation
              </NavLink>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div className="lg:w-1/2 relative"
            variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <img src={visionImg} alt="VisvaBangla Spiritual University" className="w-full h-130 object-cover" />
            </div>
            {/* floating stats */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">300+</p>
                <p className="text-xs text-gray-500">Participants</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-xs text-gray-500">Years Research</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#11141B]">100%</p>
                <p className="text-xs text-gray-500">Free</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* ── 2. Four Pillars ── */}
    <motion.section
      className="py-14 bg-[#f7f8fa]"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <motion.div className="flex flex-col items-center text-center gap-3 mb-12"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Four Pillars
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#11141B]">
            Built on <span className="text-primary">Universal Foundations</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer()} initial="hidden" whileInView="show" viewport={viewport}
        >
          {pillars.map((p, i) => (
            <motion.div key={i} variants={fadeUp}
              className="group flex flex-col gap-4 p-7 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 text-center items-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-[#11141B]">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>

    {/* ── 3. Vision statement ── */}
    <motion.section
      className="py-16 bg-[#0d1117]"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          <motion.div className="lg:w-1/2 flex flex-col gap-6"
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
            <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest">
              Our Dream
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
              A University Like <span className="text-secondary">No Other in the World</span>
            </h2>
            <blockquote className="pl-5 border-l-4 border-secondary">
              <p className="text-white/80 text-[15px] leading-relaxed italic">
                "Nowhere in the world has a university been established solely for the purpose of freely distributing universal humanitarian and spiritual meditation-based knowledge dedicated to self-purification. We dream of building a peaceful, compassionate, non-communal, and humanitarian world through the study, research, and publication of the philosophies of the great human beings of the world."
              </p>
              <footer className="mt-3 text-secondary text-sm font-semibold">— Dr. S. M. Hasib Ul Hasan, Founder</footer>
            </blockquote>
            <p className="text-white/60 text-sm leading-relaxed">
              In today's capitalist and materialistic social system, essential aspects of human life such as education, healthcare, employment, and housing have become commodities. This institution stands as a counter-vision — a sanctuary of free knowledge, compassion, and spiritual liberation.
            </p>
          </motion.div>

          <motion.div className="lg:w-1/2 flex flex-col gap-4"
            variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">Participating Regions</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {regions.map(r => (
                <span key={r} className="px-4 py-2 rounded-full bg-white/8 border border-white/15 text-white/70 text-sm font-medium">
                  {r}
                </span>
              ))}
            </div>
            <p className="text-white/60 text-[15px] leading-relaxed">
              People from Rajshahi and neighboring districts — including followers of Sufism, Gurubadi and Tariqa traditions, spiritual seekers, laborers, and ordinary non-communal people devoted to self-discovery — have participated in weekly thematic classes focused on humanitarian philosophy, meditation, spiritual knowledge, and Sufi teachings.
            </p>
            <p className="text-white/60 text-[15px] leading-relaxed">
              Teachers, researchers, and scholars from various educational institutions and universities are working with us to simplify and freely distribute research-based spiritual and philosophical knowledge among underprivileged working-class people — including laborers, day workers, porters, blacksmiths, potters, fishermen, and weavers.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* ── 4. Features grid ── */}
    <motion.section
      className="py-16 lg:py-24 bg-white"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* Left — image */}
          <motion.div className="lg:w-5/12 lg:sticky lg:top-28"
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
              <img src={aboutImg} alt="University Programs" className="w-full h-[420px] object-cover" />
            </div>
            <div className="mt-5 rounded-2xl bg-secondary p-6 flex flex-col gap-3">
              <p className="text-white font-bold text-lg">Open to Everyone</p>
              <p className="text-white/75 text-sm leading-relaxed">
                Any interested individual may join this humanitarian educational philosophy at any time. Any knowledgeable scholar or researcher may voluntarily teach in these classes. Everything is conducted entirely free of charge.
              </p>
              <NavLink to="/contact"
                className="self-start mt-1 px-5 py-2.5 rounded-full bg-white text-secondary text-sm font-bold hover:bg-white/90 transition-all duration-300">
                Join Now — It's Free
              </NavLink>
            </div>
          </motion.div>

          {/* Right — features */}
          <motion.div className="lg:w-7/12 flex flex-col gap-6"
            variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="flex flex-col gap-3">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
                What We Offer
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#11141B] leading-snug">
                A New Model of <span className="text-secondary">Free Spiritual Education</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Researchers and spiritual practitioners simplify modern scientific and research-based humanitarian and spiritual knowledge for educationally deprived ordinary people. Weekly and monthly classes include analytical and evidence-based discussions on different levels of spiritual consciousness.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewport}
            >
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#f7f8fa] border border-gray-100 hover:border-secondary/20 transition-colors duration-200">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    {f.icon}
                  </span>
                  <span className="text-sm font-medium text-[#11141B]">{f.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Self-purification note */}
            <div className="mt-2 p-5 rounded-2xl border-l-4 border-secondary bg-secondary/5">
              <p className="text-sm font-bold text-[#11141B] mb-1">Core Principle</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                This humanitarian institution will be dedicated to realizing a noble vision. Here, <span className="font-semibold text-secondary">self-purification will be regarded as the foundation of all well-being</span> — the path toward a compassionate, just, and service-oriented human society.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* ── 5. CTA ── */}
    <motion.section
      className="py-14 bg-[#f7f8fa]"
      variants={fadeIn} initial="hidden" whileInView="show" viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-3xl border border-gray-100 shadow-[0_2px_24px_rgba(0,0,0,0.06)] px-8 py-8"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#11141B]">Ready to Begin Your Journey?</h3>
            <p className="text-gray-500 text-sm">Join our free weekly classes — open to all, no registration fee, no commitment.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <NavLink to="/contact"
              className="px-7 py-3 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-all duration-300">
              Contact Us
            </NavLink>
            <NavLink to="/media/audio"
              className="px-7 py-3 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              Free Meditation
            </NavLink>
          </div>
        </motion.div>
      </div>
    </motion.section>
  </div>
);

export default University;
