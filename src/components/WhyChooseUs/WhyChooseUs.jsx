import { TbWorld, TbHeartHandshake, TbBuildingCommunity, TbLeaf } from 'react-icons/tb';
import { LuGraduationCap, LuScale, LuUsers } from 'react-icons/lu';
import { GiLotus } from 'react-icons/gi';
import { PiHandsPrayingLight } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { fadeIn, fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from '../../lib/motion';
import whyChooseImg from '../../assets/why choose.jpg';
import { useTranslation } from 'react-i18next';


const WhyChooseUs = () => {

 const {t} = useTranslation()

  const reasons = [
    {
      icon: <GiLotus size={18} />,
      title: `${t("completely_free")}`,
      desc: `${t("completely_free_description")}`,
    },
    {
      icon: <TbWorld size={18} />,
      title: `${t("universal_non_communal")}`,
      desc: `${t("universal_non_communal_description")}`,
    },
    {
      icon: <PiHandsPrayingLight size={18} />,
      title: `${t("sufi_spiritual_guidance")}`,
      desc: `${t("sufi_spiritual_guidance_description")}`,
    },
    {
      icon: <LuGraduationCap size={18} />,
      title: `${t("research_based_education")}`,
      desc: `${t("research_based_education_description")}`,
    },
    {
      icon: <LuUsers size={18} />,
      title: `${t("community_self_reliance")}`,
      desc: `${t("community_self_reliance_description")}`,
    },
    {
      icon: <TbHeartHandshake size={18} />,
      title: `${t("humanitarian_mission")}`,
      desc: `${t("humanitarian_mission_description")}`,
    },
    {
      icon: <TbBuildingCommunity size={18} />,
      title: `${t("world_human_religion_center")}`,
      desc: `${t("world_human_religion_center_description")}`,
    },
    {
      icon: <TbLeaf size={18} />,
      title: `${t("environmental_social_action")}`,
      desc: `${t("environmental_social_action_description")}`,
    },
  ];

  return (
    <motion.section
      className="py-16 lg:py-24 bg-[#f7f8fa] overflow-visible"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* ── Left: content ── */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-8"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >

            {/* Badge + heading */}
            <div className="flex flex-col gap-4">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                {t("why_choose_us")}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
                {t("Why_Choose_Us_title_line_1")} <br />
                <span className="text-primary">{t("Why_Choose_Us_title_line_2")}</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {t("Why_Choose_Us_description")}
              </p>
            </div>

            {/* Reasons grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-primary/25 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle bg glow on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                  {/* Icon */}
                  <span className="relative mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(254,0,0,0.3)]">
                    {r.icon}
                  </span>

                  {/* Text */}
                  <div className="relative flex flex-col gap-0.5">
                    <p className="text-sm font-bold text-[#11141B] leading-snug group-hover:text-primary transition-colors duration-200">{r.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="flex items-center gap-4 p-4 rounded-2xl bg-linear-to-r from-primary/6 to-secondary/6 border border-primary/15"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <LuScale size={18} />
              </div>
              <p className="text-sm text-gray-600 ">
                <span className="font-semibold text-[#11141B]">{t("values_line_1")}</span>{t("values_line_2")}
              </p>
            </motion.div>

          </motion.div>

          {/* ── Right: image ── */}
          <motion.div
            className="lg:w-1/2 lg:sticky lg:top-28 w-full"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <img
                src={whyChooseImg}
                alt="Why Choose VisvaBangla Foundation"
                className="w-full h-150 object-cover"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              {/* floating stat cards */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 text-center shadow-lg">
                  <p className="text-xl font-bold text-primary">150+</p>
                  <p className="text-xs text-gray-500">{t("regular_participants")}</p>
                </div>
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 text-center shadow-lg">
                  <p className="text-xl font-bold text-secondary">100%</p>
                  <p className="text-xs text-gray-500">{t("free_of_cost")}</p>
                </div>
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 text-center shadow-lg">
                  <p className="text-xl font-bold text-[#11141B]">15+</p>
                  <p className="text-xs text-gray-500">{t("years_research")}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
