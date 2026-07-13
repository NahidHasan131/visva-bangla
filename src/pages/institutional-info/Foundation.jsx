import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { GiLotus } from "react-icons/gi";
import { TbWorld, TbBuildingCommunity, TbHeartHandshake } from "react-icons/tb";
import {
  LuSprout,
  LuUsers,
  LuScale,
  LuGraduationCap,
  LuBookOpen,
} from "react-icons/lu";
import {
  MdOutlineHealthAndSafety,
  MdOutlineVolunteerActivism,
} from "react-icons/md";
import { PiHandsPrayingLight } from "react-icons/pi";
import {
  fadeIn,
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
  viewport,
} from "../../lib/motion";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import aboutImg from "../../assets/visvaBanglaAboutImg.jpeg";
import visionImg from "../../assets/spritual- university.png";
import CurrentCommittee from "../../components/AboutValues/CurrentCommittee";
import { Trans, useTranslation } from "react-i18next";

const Foundation = () => {
  const { t } = useTranslation();
  const objectives = [
    {
      num: "01",
      icon: <TbWorld size={16} />,
      title: `${t("universal_family_global_outreach")}`,
      desc: `${t("universal_family_global_outreach_description")}`,
    },
    {
      num: "02",
      icon: <LuSprout size={16} />,
      title: `${t("self_reliance_empowerment")}`,
      desc: `${t("self_reliance_empowerment_description")}`,
    },
    {
      num: "03",
      icon: <PiHandsPrayingLight size={16} />,
      title: `${t("global_humanitarian_leadership")}`,
      desc: `${t("global_humanitarian_leadership_description")}`,
    },
    {
      num: "04",
      icon: <TbBuildingCommunity size={16} />,
      title: `${t("education_institutions")}`,
      desc: `${t("education_institutions_description")}`,
    },
    {
      num: "05",
      icon: <LuGraduationCap size={16} />,
      title: `${t("world_human_religion")}`,
      desc: `${t("world_human_religion_description")}`,
    },
    {
      num: "06",
      icon: <LuBookOpen size={16} />,
      title: `${t("education_culture_technology")}`,
      desc: `${t("education_culture_technology_description")}`,
    },
    {
      num: "07",
      icon: <LuUsers size={16} />,
      title: `${t("youth_community_development")}`,
      desc: `${t("youth_community_development_description")}`,
    },
    {
      num: "08",
      icon: <MdOutlineHealthAndSafety size={16} />,
      title: `${t("healthcare_social_welfare")}`,
      desc: `${t("healthcare_social_welfare_description")}`,
    },
    {
      num: "09",
      icon: <LuScale size={16} />,
      title: `${t("legal_aid_human_rights")}`,
      desc: `${t("legal_aid_human_rights_description")}`,
    },
    {
      num: "10",
      icon: <TbHeartHandshake size={16} />,
      title: `${t("child_rights_protection")}`,
      desc: `${t("child_rights_protection_description")}`,
    },
    {
      num: "11",
      icon: <MdOutlineVolunteerActivism size={16} />,
      title: `${t("environmental_social_action")}`,
      desc: `${t("environmental_social_action_desc")}`,
    },
    {
      num: "12",
      icon: <TbBuildingCommunity size={16} />,
      title: `${t("collaboration_coordination")}`,
      desc: `${t("collaboration_coordination_description")}`,
    },
  ];

  return (
    <div>
      <Breadcrumb />

      {/* ── 1. Hero intro ── */}
      <motion.section
        className="py-16 lg:py-24 bg-white"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="max-w-340 mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            {/* Left — content */}
            <motion.div
              className="lg:w-1/2 flex flex-col gap-7"
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="flex flex-col gap-3">
                <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {t("visvabangla_foundation")}
                </span>
                <h1 className="text-4xl lg:text-5xl font-semibold text-[#11141B] leading-tight">
                  {t("universal_humanitarian_title_line_1")} <br />
                  <span className="text-primary">{t("universal_humanitarian_title_line_2")}</span>
                </h1>
                <p className="text-gray-400 text-sm">
                  {t("institute_description")}
                </p>
              </div>

              <p className="text-gray-500 text-[15px] leading-relaxed">
                <p className="text-gray-500 text-[15px] leading-relaxed">
                <Trans
                  i18nKey="foundation_story"
                  components={{
                    highlight: (
                      <span className="font-semibold text-[#11141B]" />
                    ),
                  }}
                />
              </p>
              </p>

              <p className="text-gray-500 text-[15px] leading-relaxed">
                {t("registration_description")}
              </p>

              {/* Registration card */}
              <div className="rounded-2xl bg-[#f7f8fa] border border-gray-100 px-6 py-5 flex flex-col gap-2">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  {t("official_registration")}
                </p>
                <p className="text-sm font-bold text-[#11141B]">
                  {t("ministry_social_welfare")}
                </p>
                <p className="text-sm text-gray-500">
                  {t("government_bangladesh")}
                </p>
                <p className="text-sm text-gray-500">
                  {t("registration_no")}{" "}
                  <span className="font-semibold text-[#11141B]">1012/15</span>
                  &nbsp;|&nbsp; {t("date")}:{" "}
                  <span className="font-semibold text-[#11141B]">
                    July 13, 2015
                  </span>
                </p>
                <div className="mt-2 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                    {t("address")}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t("foundation_address_1")}
                    <br />
                    {t("foundation_address_2")}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <NavLink
                  to="/contact"
                  className="px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  {t("get_involved")}
                </NavLink>
                <NavLink
                  to="/others/university"
                  className="px-6 py-3 rounded-full border border-secondary text-secondary text-sm font-semibold hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  {t("spiritual_university")}
                </NavLink>
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              className="lg:w-1/2 relative"
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                <img
                  src={aboutImg}
                  alt="VisvaBanglaFoundation"
                  className="w-full h-125 object-cover"
                />
              </div>
              {/* floating stats */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">300+</p>
                  <p className="text-xs text-gray-500">{t("participants")}</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">100%</p>
                  <p className="text-xs text-gray-500">{t("free_of_cost")}</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#11141B]">2015</p>
                  <p className="text-xs text-gray-500">{t("established")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── 2. Nature & Character ── */}
      <motion.section
        className="py-14 bg-secondary"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="max-w-340 mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold uppercase tracking-widest">
             {t("nature_character")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
              {t("nature_title")}
            </h2>
            <p className="text-white/75 text-[15px] leading-relaxed">
              {t("nature_title")}
            </p>
            <blockquote className="mt-2 pl-5 border-l-4 border-white/40 text-left">
              <p className="text-white/80 text-sm italic leading-relaxed">
                "{t("vision_founder_message")}"
              </p>
              <footer className="mt-2 text-white/50 text-xs font-medium">
                — {t("Dr. S. M. Hasib Ul Hasan")}, {t("founder")}
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </motion.section>

      {/* ── 3. Goals & Objectives ── */}
      <motion.section
        className="py-16 lg:py-24 bg-[#f7f8fa]"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="max-w-340 mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-col items-center text-center gap-3 mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              {t("goals_objectives")}
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#11141B]">
              {t("goals_title_line_1")}
              <span className="text-secondary">{t("goals_title_line_2")}</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
              {t("goals_description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {objectives.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-secondary/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200 group"
              >
                <div className="shrink-0 flex flex-col items-center gap-1 pt-0.5">
                  <span className="text-xs font-bold text-primary">
                    {v.num}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    {v.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#11141B]">
                    {v.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── 4. Vision image section ── */}
      <motion.section
        className="pt-16 lg:pt-24 bg-white"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="max-w-340 mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <motion.div
              className="lg:w-1/2 relative"
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                <img
                  src={visionImg}
                  alt="VisvaBanglaSpiritual University"
                  className="w-full h-125 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 flex flex-col gap-6"
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
                {t("experimental_activities")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#11141B] leading-snug">
                {t("university_title_line_1")}
                <span className="text-primary">{t("university_title_line_2")}</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {t("university_description_1")}
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {t("university_description_2")}
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                <Trans
                  i18nKey="university_description_3"
                  values={{ count: "300+" }}
                  components={{
                    highlight: (
                      <span className="font-semibold text-[#11141B]" />
                    ),
                  }}
                />
              </p>
              <NavLink
                to="/others/university"
                className="self-start px-6 py-3 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-all duration-300"
              >
                {t("learn_about_university")}
              </NavLink>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── 5. Current Committee ── */}
      <motion.section
        className="py-16 lg:py-24 "
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="max-w-340 mx-auto px-6 lg:px-12">
          <CurrentCommittee showContactButton={true} />
        </div>
      </motion.section>
    </div>
  );
};

export default Foundation;
