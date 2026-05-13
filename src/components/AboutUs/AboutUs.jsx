import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { NavLink } from 'react-router-dom';
import { GiMeditation } from 'react-icons/gi';
import { BiAward } from 'react-icons/bi';
import aboutImg from '../../assets/about-img.jpg';
import logo1 from '../../assets/Logo-1.png';
import logo2 from '../../assets/Logo-2.png';
import logo3 from '../../assets/Logo-3.png';
import logo4 from '../../assets/Logo-4.png';
import logo5 from '../../assets/Logo-5.png';

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '30+', label: 'Countries Reached' },
  { value: '2K+', label: 'Classes Conducted' },
];

const logos = [logo1, logo2, logo3, logo4, logo5, logo3];

const AboutUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* Top: heading left, stats right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-14">

          {/* Left */}
          <div className="flex flex-col gap-4 max-w-md">
            <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
              Our Passion for <br /> Yoga & Meditation
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Id massa id tortor interdum consectetur eu ultrices viverra. <br />
              Est aliquet pellentesque potenti.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10 md:gap-16 mt-2">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-4xl lg:text-5xl font-semibold text-[#11141B]">{s.value}</span>
                <span className="text-sm text-gray-500 leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: image + feature cards */}
        <div className="flex flex-col md:flex-row gap-6 mb-16">

          {/* About image */}
          <div className='md:w-5/12'>
              <img src={aboutImg} alt="About Shunno Yoga" className="w-full h-72 md:h-full object-cover rounded-2xl" />
          </div>

          {/* Feature cards */}
          <div className='md:w-7/12 grid col-1 md:grid-cols-2 gap-6'>
              <div className="flex flex-col gap-4 p-10 rounded-2xl bg-[#F0F7F2]">
                <div className="w-13 h-13 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className='bg-[#62826B] p-1 text-white rounded-full'><BiAward size={20} className="text-white" /></span>
                </div>
                <h3 className="text-2xl font-semibold text-[#11141B]">Certified Instructors</h3>
                <p className="text-gray-500 leading-relaxed">Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white hover:bg-[#F0F7F2] transition-all duration-200 border-2 border-[#F0F7F2]  ">
                <div className="w-13 h-13 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className='bg-[#62826B] p-1 text-white rounded-full'><GiMeditation size={20} className="text-white" /></span>
                </div>
                <h3 className="text-2xl font-semibold text-[#11141B]">Holistic Approach</h3>
                <p className="text-gray-500 leading-relaxed">Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
              </div>
          </div>
        </div>

        {/* Brand logo slider */}
        <div className=" pt-10 px-10">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={40}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
            }}>
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center py-3">
                  <img src={logo} alt={`brand-${i + 1}`} className="w-40 h-10 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
