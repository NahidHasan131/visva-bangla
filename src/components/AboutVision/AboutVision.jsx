import React from "react";
import { TbWorld } from "react-icons/tb";
import { PiHandsPrayingLight } from "react-icons/pi";
import { LuBookOpen, LuGraduationCap } from "react-icons/lu";
import { GiLotus } from "react-icons/gi";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
  viewport,
} from "../../lib/motion";
import visionImg from "../../assets/spritual- university.png";
import { useTranslation } from "react-i18next";

const AboutVision = () => {
  const {t} = useTranslation();
  const visionPoints = [
    {
      icon: <TbWorld size={18} />,
      title: `${t("universal_family")}`,
      desc: `${t("universal_family_description")}`,
    },
    {
      icon: <GiLotus size={18} />,
      title: `${t("world_human_religion_center")}`,
      desc: `${t("world_human_religion_center_desc")}`,
    },
    {
      icon: <LuGraduationCap size={18} />,
      title: `${t("visvabangla_spiritual_university")}`,
      desc: `${t("visvabangla_spiritual_university_description")}`,
    },
    {
      icon: <PiHandsPrayingLight size={18} />,
      title: `${t("sufi_spiritual_education")}`,
      desc: `${t("sufi_spiritual_education_description")}`,
    },
    {
      icon: <LuBookOpen size={18} />,
      title: `${t("research_publications")}`,
      desc: `${t("research_publications_description")}`,
    },
  ];
  return (
    <motion.section
      className="py-14 lg:py-20 bg-[#f7f8fa]"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* Left content */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-8 "
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="flex flex-col gap-3">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                {t("our_vision")}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
                {t("vision_title_line_1")} <br />
                <span className="text-secondary">{t("vision_title_line_2")}</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {t("vision_description")}
              </p>
            </div>

            {/* Vision statement quote */}
            <blockquote className="relative pl-5 border-l-4 border-secondary">
              <p className="text-[#11141B] font-medium text-[15px] leading-relaxed italic">
                "{t("vision_founder_message")}"
              </p>
              <footer className="mt-2 text-sm text-gray-400 font-medium">
                — {t("Dr. S. M. Hasib Ul Hasan")}, {t("founder")}
              </footer>
            </blockquote>

            {/* Vision points */}
            <motion.ul
              className="flex flex-col gap-4"
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {visionPoints.map((v, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 group"
                >
                  <span className="mt-0.5 w-9 h-9 rounded-xl bg-white border border-gray-200 text-secondary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-200">
                    {v.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#11141B]">
                      {v.title}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="lg:w-1/2 relative"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <img
                src={visionImg}
                alt="Our vision"
                className="w-full h-160 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent rounded-3xl" />
            </div>
            {/* floating stat */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">300+</p>
                <p className="text-xs text-gray-500">{t("regular_participants")}</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">15+</p>
                <p className="text-xs text-gray-500">{t("years_of_research")}</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#11141B]">2015</p>
                <p className="text-xs text-gray-500">{t("year_established")}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default AboutVision;
