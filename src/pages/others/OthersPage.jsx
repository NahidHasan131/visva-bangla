import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const OthersPage = ({ title, desc }) => (
  <div>
    <Breadcrumb />
    <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="flex flex-col gap-4 max-w-2xl">
        <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
          VisvaBangla Foundation
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">{title}</h1>
        {desc && <p className="text-gray-500 leading-relaxed">{desc}</p>}
        <p className="text-gray-400 text-sm mt-4 p-6 rounded-2xl bg-[#f7f8fa] border border-gray-100">
          This page is currently under development. Please check back soon for updates from VisvaBangla Foundation.
        </p>
      </div>
    </div>
  </div>
);

export default OthersPage;
