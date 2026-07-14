import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../../lib/motion";
import { useTranslation } from "react-i18next";

/**
 * CurrentCommittee
 *
 * Props:
 *  - showContactButton: boolean — show "Contact the Foundation" button (default false)
 */
const CurrentCommittee = ({ showContactButton = false }) => {
  const { t } = useTranslation();

  const committee = [
    { role: t("president"),                        name: t("Dr. S. M. Hasib Ul Hasan") },
    { role: t("vice_president"),                   name: t("sm_mostafizur_rahman") },
    { role: t("general_secretary"),                name: t("md_sadek_ali") },
    { role: t("secretary_industry_technology"),    name: t("md_shahadat_hossain") },
    { role: t("secretary_education_culture"),      name: t("md_naeem_imtiaz") },
    { role: t("secretary_research_publications"),  name: t("mst_sumaiya_akhtar") },
    { role: t("organizational_secretary"),         name: t("mst_mullika_bibi") },
    { role: t("treasurer"),                        name: t("md_mahabub_rahman") },
    { role: t("office_secretary"),                 name: t("md_sohel_islam_ripon") },
  ];

  return (
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
        <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">
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

      {showContactButton && (
        <motion.div
          className="flex justify-center mt-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <NavLink
            to="/contact"
            className="px-8 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
          >
            Contact the Foundation
          </NavLink>
        </motion.div>
      )}
    </div>
  );
};

export default CurrentCommittee;
