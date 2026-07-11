import { NavLink } from 'react-router-dom';
import { GiLotus } from 'react-icons/gi';
import { TbArrowRight } from 'react-icons/tb';
import { PiHandsPrayingLight } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { fadeIn, fadeUp, staggerContainer, viewport } from '../../lib/motion';
import ctaImg from '../../assets/call-to-action.jpg';
import { useTranslation } from 'react-i18next';

const CallToAction = () => {

  const {t} = useTranslation();

  const stats = [
  { value: '150+', label: t('regular_participants') },
  { value: '100%', label: t('free_of_cost') },
  { value: '15+',  label: t('years_of_research') },
];

  return (
    <motion.section
      className="relative py-20 lg:py-28 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${ctaImg})` }}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <div className="absolute inset-0 bg-[#0d1117]/78" />
      <div className="relative z-10 max-w-340 mx-auto px-6 lg:px-12 flex flex-col items-center text-center gap-8">

        <motion.span
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest backdrop-blur-sm"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <PiHandsPrayingLight size={14} />
          {t("join_the_movement")}
        </motion.span>

        <motion.div
          className="flex flex-col gap-4 max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <h2 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
            {t("journey_title_line_1")}
            <br />
            <span className="text-secondary">{t("journey_title_line_2")}</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-xl mx-auto">
            {t("journey_description")}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-12"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center gap-1">
              <span className="text-3xl lg:text-4xl font-bold text-white">{s.value}</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <NavLink
            to="/media/audio"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-secondary/90 transition-all duration-300 shadow-[0_4px_20px_rgba(6,164,167,0.4)]"
          >
            <GiLotus size={16} />
            {t("join_free_meditation")}
          </NavLink>
          <NavLink
            to="/about"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
          >
            {t("explore_our_vision")}
            <TbArrowRight size={16} />
          </NavLink>
        </motion.div>

        <p className="text-gray-500 text-xs">
          {t("join_note")}
        </p>

      </div>
    </motion.section>
  );
};

export default CallToAction;
