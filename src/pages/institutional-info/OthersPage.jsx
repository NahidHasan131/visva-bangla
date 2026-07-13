import { useTranslation } from 'react-i18next';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const OthersPage = ({ title, desc }) => {
  const {t} = useTranslation();
  return(
  <div>
    <Breadcrumb />
    <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="flex flex-col gap-4 max-w-2xl">
        <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
          {t("visvabangla_foundation")}
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">{t(title)}</h1>
        {desc && <p className="text-gray-500 leading-relaxed"> {t(desc)}</p>}
        <p className="text-gray-400 text-sm mt-4 p-6 rounded-2xl bg-[#f7f8fa] border border-gray-100">
          {t("page_under_development")}
        </p>
      </div>
    </div>
  </div>
);
};
export default OthersPage;
