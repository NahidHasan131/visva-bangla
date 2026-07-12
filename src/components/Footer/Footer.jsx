import { NavLink } from "react-router-dom";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import visvaBangala from "../../assets/logo/visva-bangala.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const quickLinks = [
    { label: `${t("home")}`, path: "/" },
    { label: `${t("about_us")}`, path: "/about" },
    { label: `${t("our_trainers")}`, path: "/about/trainer" },
    { label: `${t("media")}`, path: "/media" },
    { label: `${t("blog")}`, path: "/blog" },
    { label: `${t("contact_us")}`, path: "/contact" },
  ];

  const programs = [
    {
      label: `${t("free_meditation_sessions")}`,
      path: "/media/audio",
    },
    {
      label: `${t("spiritual_education")}`,
      path: "/media",
    },
    {
      label: `${t("yoga_classes")}`,
      path: "/media/video",
    },
    {
      label: `${t("sufi_philosophy_programs")}`,
      path: "/media/audio",
    },
    {
      label: `${t("research_publications")}`,
      path: "/others/publication",
    },
    {
      label: `${t("gallery")}`,
      path: "/media/gallery",
    },
  ];

  const others = [
    {
      label: `${t("foundation")}`,
      path: "/others/foundation",
    },
    {
      label: `${t("university")}`,
      path: "/others/university",
    },
    { label: `${t("notice")}`, path: "/others/notice" },
    {
      label: `${t("privacy_policy")}`,
      path: "/others/privacy-policy",
    },
    {
      label: `${t("terms_conditions")}`,
      path: "/others/terms",
    },
    {
      label: `${t("download")}`,
      path: "/others/download",
    },
  ];

  const socials = [
    { icon: <FaFacebookF size={14} />, href: "#", label: "Facebook" },
    { icon: <FaYoutube size={14} />, href: "#", label: "YouTube" },
    { icon: <TbBrandX size={14} />, href: "#", label: "X" },
  ];
  return (
    <footer className="bg-[#0d1117] text-gray-400">
      {/* Main footer */}
      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ── Brand column ── */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2">
              <img
                src={visvaBangala}
                alt="Visva Bangla"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-semibold uppercase text-secondary">
                {t("visvabangla")}
              </span>
            </NavLink>

            <p className="text-sm leading-relaxed text-gray-400">
              {t("footer_description")}
            </p>

            {/* Contact info */}
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MdOutlineLocationOn
                  size={16}
                  className="text-secondary shrink-0 mt-0.5"
                />
                <span>{t("footer_address")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdOutlineEmail size={16} className="text-secondary shrink-0" />
                <a
                  href="mailto:info@visvabangla.org"
                  className="hover:text-white transition-colors"
                >
                  info@visvabangla.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MdOutlinePhone size={16} className="text-secondary shrink-0" />
                <a
                  href="tel:+8801700000000"
                  className="hover:text-white transition-colors"
                >
                  +880 1700 000000
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              {t("quick_links")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.path}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-secondary transition-colors shrink-0" />
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Programs ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              {t("programs")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {programs.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.path}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-secondary transition-colors shrink-0" />
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Others ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              {t("others")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {others.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.path}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-secondary transition-colors shrink-0" />
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Reg info */}
            <div className="mt-2 p-4 rounded-xl bg-white/5 border border-white/8">
              <p className="text-xs text-gray-500 leading-relaxed">
                {t("registered_under")}
                <br />
                <span className="text-gray-400 font-medium">
                  {t("registration_no")} 1012/15 &nbsp;|&nbsp; July 13, 2015
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8">
        <div className="max-w-340 mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>{t("copyright")}</span>
          <span>{t("footer_bottom_text")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
