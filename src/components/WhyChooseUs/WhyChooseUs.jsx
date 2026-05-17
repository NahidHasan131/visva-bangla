import { TbWorld, TbHeartHandshake, TbBuildingCommunity, TbLeaf } from 'react-icons/tb';
import { LuGraduationCap, LuScale, LuUsers } from 'react-icons/lu';
import { GiLotus } from 'react-icons/gi';
import { PiHandsPrayingLight } from 'react-icons/pi';
import whyChooseImg from '../../assets/why choose.jpg';
import Newsletter from '../Newsletter/Newsletter';

const reasons = [
  {
    icon: <GiLotus size={18} />,
    title: 'Completely Free',
    desc: 'All programs — meditation, spiritual education, and knowledge sessions — are entirely free of cost, open to every seeker regardless of background.',
  },
  {
    icon: <TbWorld size={18} />,
    title: 'Universal & Non-Communal',
    desc: 'Rooted in the belief that the whole world is one family. We welcome all people beyond religion, caste, or sectarian identity.',
  },
  {
    icon: <PiHandsPrayingLight size={18} />,
    title: 'Sufi-Inspired Spiritual Guidance',
    desc: 'Programs inspired by centuries of Sufi wisdom, guiding seekers toward self-purification, inner liberation, and spiritual awareness.',
  },
  {
    icon: <LuGraduationCap size={18} />,
    title: 'Research-Based Education',
    desc: 'Teachers, researchers, and scholars simplify and freely distribute research-based spiritual and philosophical knowledge for all.',
  },
  {
    icon: <LuUsers size={18} />,
    title: 'Community & Self-Reliance',
    desc: 'Empowering individuals — especially youth and disadvantaged communities — through training, skill development, and socio-economic participation.',
  },
  {
    icon: <TbHeartHandshake size={18} />,
    title: 'Humanitarian Mission',
    desc: 'Working toward healthcare, legal aid, child rights, environmental protection, and housing welfare for poor and marginalized communities.',
  },
  {
    icon: <TbBuildingCommunity size={18} />,
    title: 'World Human Religion Center',
    desc: 'Building a safe, service-oriented residential meditation center open to people from all walks of life — a sanctuary for peace and reflection.',
  },
  {
    icon: <TbLeaf size={18} />,
    title: 'Environmental & Social Action',
    desc: 'Committed to afforestation, sanitation, anti-drug awareness, and environmentally friendly self-employment and cottage industries.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#f7f8fa] overflow-visible">
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* ── Left: content ── */}
          <div className="lg:w-1/2 flex flex-col gap-8">

            {/* Badge + heading */}
            <div className="flex flex-col gap-4">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                Why Choose Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
                A Foundation Built on <br />
                <span className="text-primary">Truth & Humanity</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Bishwabangla Foundation is not just an organization — it is a movement toward a peaceful, compassionate, and non-communal world through free education, meditation, and spiritual guidance.
              </p>
            </div>

            {/* Reasons grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200"
                >
                  <span className="mt-0.5 w-8 h-8 rounded-lg bg-primary/8 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    {r.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#11141B] leading-snug">{r.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── Right: image ── */}
          <div className="lg:w-1/2 lg:sticky lg:top-28 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <img
                src={whyChooseImg}
                alt="Why Choose Bishwabangla Foundation"
                className="w-full h-150 object-cover"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              {/* floating stat cards */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 text-center shadow-lg">
                  <p className="text-xl font-bold text-primary">150+</p>
                  <p className="text-xs text-gray-500">Regular Participants</p>
                </div>
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 text-center shadow-lg">
                  <p className="text-xl font-bold text-secondary">100%</p>
                  <p className="text-xs text-gray-500">Free of Cost</p>
                </div>
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 text-center shadow-lg">
                  <p className="text-xl font-bold text-[#11141B]">15+</p>
                  <p className="text-xs text-gray-500">Years Research</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Newsletter />
    </section>
  );
};

export default WhyChooseUs;
