import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineHealthAndSafety,
  MdOutlineVolunteerActivism,
} from "react-icons/md";
import { LuScale, LuSprout, LuUsers } from "react-icons/lu";
import { TbBuildingCommunity } from "react-icons/tb";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
  viewport,
} from "../../lib/motion";
import aboutImg from "../../assets/goals-left-img.jpg";
import { useTranslation } from "react-i18next";

const AboutValues = () => {

  const {t} = useTranslation();

  const objectives = [
    {
      num: "01",
      icon: <LuSprout size={16} />,
      title: `${t("self_reliance_empowerment")}`,
      desc: `${t("self_reliance_empowerment_description")}`,
    },
    {
      num: "02",
      icon: <TbBuildingCommunity size={16} />,
      title: `${t("education_institutions")}`,
      desc: `${t("education_institutions_description")}`,
    },
    {
      num: "03",
      icon: <LuUsers size={16} />,
      title: `${t("youth_community_development")}`,
      desc: `${t("youth_community_development_description")}`,
    },
    {
      num: "04",
      icon: <LuScale size={16} />,
      title: `${t("legal_aid_human_rights")}`,
      desc: `${t("legal_aid_human_rights_description")}`,
    },
    {
      num: "05",
      icon: <MdOutlineHealthAndSafety size={16} />,
      title: `${t("healthcare_social_welfare")}`,
      desc: `${t("healthcare_social_welfare_description")}`,
    },
    {
      num: "06",
      icon: <MdOutlineVolunteerActivism size={16} />,
      title: `${t("environmental_social_action")}`,
      desc: `${t("environmental_social_action_desc")}`,
    },
  ];

  const committee = [
    { role: `${t("president")}`, name: `${t("Dr. S. M. Hasib Ul Hasan")}`},
    { role: `${t("vice_president")}`, name: `${t("sm_mostafizur_rahman")}` },
    { role: `${t("general_secretary")}`, name: `${t("md_sadek_ali")}`},
    { role: `${t("secretary_industry_technology")}`, name: `${t("md_shahadat_hossain")}` },
    { role: `${t("secretary_education_culture")}`, name: `${t("md_naeem_imtiaz")}`},
    { role: `${t("secretary_research_publications")}`, name: `${t("mst_sumaiya_akhtar")}`},
    { role: `${t("organizational_secretary")}`, name: `${t("mst_mullika_bibi")}`},
    { role: `${t("treasurer")}`, name: `${t("md_mahabub_rahman")}`},
    { role: `${t("office_secretary")}`, name: `${t("md_sohel_islam_ripon")}`},
  ];
  return (
    <motion.section
      className="py-16 lg:py-24 bg-white"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        {/* ── Goals & Objectives ── */}
        <div className="flex flex-col lg:flex-row gap-14 items-start mb-20">
          {/* Left image */}
          <motion.div
            className="lg:w-2/5 w-full lg:sticky lg:top-28"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
              <img
                src={aboutImg}
                alt="Our values"
                className="w-full h-130 object-fit"
              />
            </div>
            {/* Info card */}
            <div className="mt-5 rounded-2xl border border-gray-100 bg-[#f7f8fa] px-6 py-5 flex flex-col gap-1.5">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                {t("registration")}
              </p>
              <p className="text-sm font-bold text-[#11141B]">
                {t("ministry_social_welfare")}
              </p>
              <p className="text-sm text-gray-500">
                {t("government_bangladesh")}
              </p>
              <p className="text-sm text-gray-500">
                {t("registration_no")}{" "}
                <span className="font-semibold text-[#11141B]">1012/15</span>{" "}
                &nbsp;|&nbsp; July 13, 2015
              </p>
              <div className="mt-2 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                  {t("address")}
                </p>
                <p className="text-sm text-gray-500">
                  {t("address1")}
                  <br />
                  {t("address2")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            className="lg:w-3/5 flex flex-col gap-8"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="flex flex-col gap-3">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                {t("goals_objectives")}
              </span>
              <h2 className="text-4xl lg:text-5xl font-medium text-[#11141B] leading-tight">
                {t("goals_title_line_1")} <br />
                <span className="text-secondary">{t("goals_title_line_2")}</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {t("goals_description")}
              </p>
            </div>

            <motion.div
              className="flex flex-col gap-0"
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {objectives.map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`flex items-start gap-5 py-3 group ${i < objectives.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  {/* Number + icon */}
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-primary">
                      {v.num}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      {v.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold text-[#11141B]">
                      {v.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <NavLink
              to="/contact"
              className="self-start px-7 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              {t("get_involved")}
            </NavLink>
          </motion.div>
        </div>

        {/* ── Current Committee ── */}
        <div className="flex flex-col gap-8">
          <motion.div
            className="flex flex-col items-center text-center gap-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
              {t("leadership")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#11141B]">
              {t("current_committee")}
            </h2>
            <p className="text-gray-500 text-sm max-w-md">
              {t("committee_description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {committee.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#f7f8fa] border border-gray-100 hover:border-secondary/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200"
              >
                {/* Avatar initial */}
                <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary font-bold text-base flex items-center justify-center shrink-0">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#11141B] leading-snug">
                    {m.name}
                  </p>
                  <p className="text-xs text-gray-400 leading-snug mt-0.5">
                    {m.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutValues;
