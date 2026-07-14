import { NavLink } from 'react-router-dom';
import { LuMapPin } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { fadeIn, fadeUp, staggerContainer, viewport } from '../../lib/motion';
import trainerImg from '../../assets/visvaBanglaTrainer.jpeg';
import { useTranslation } from 'react-i18next';


const Trainers = () => {

  const { t } = useTranslation();

  const trainers = [
    { img: trainerImg, name: `${t("Dr. S. M. Hasib Ul Hasan")}`, designation: `${t("researcher_proposer")}`, location: `${t("Rajshahi, Bangladesh")}`, path: '/about/trainer' },
    { img: trainerImg, name: `${t("Dr. S. M. Hasib Ul Hasan")}`, designation: `${t("researcher_proposer")}`, location: `${t("Rajshahi, Bangladesh")}`, path: '/about/trainer' },
    { img: trainerImg, name: `${t("Dr. S. M. Hasib Ul Hasan")}`, designation: `${t("researcher_proposer")}`, location: `${t("Rajshahi, Bangladesh")}`, path: '/about/trainer' },
    { img: trainerImg, name: `${t("Dr. S. M. Hasib Ul Hasan")}`, designation: `${t("researcher_proposer")}`, location: `${t("Rajshahi, Bangladesh")}`, path: '/about/trainer' },
  ];
  return (
    <motion.section
      className="py-16 lg:py-24 bg-[#f7f8fa]"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        <motion.div
          className="flex flex-col items-center gap-3 mb-14 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
            {t("our_guides")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">
            {t("guides_title_line_1")} <span className="text-secondary">{t("guides_title_line_2")}</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            {t("guides_description")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden h-72">
                <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <div>
                  <h3 className="text-lg font-bold text-[#11141B]">{trainer.name}</h3>
                  <p className="text-sm text-secondary font-medium mt-0.5">{trainer.designation}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <LuMapPin size={13} className="text-secondary shrink-0" />
                  {trainer.location}
                </div>
                <NavLink to={trainer.path} className="mt-1 text-center py-2.5 rounded-xl border border-secondary text-secondary text-sm font-semibold hover:bg-secondary hover:text-white transition-all duration-300">
                  {t("view_profile")}
                </NavLink>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Trainers;
