import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Swiper CSS Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// React Icons 
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';
import banner1 from '../../assets/banner/visvaBanglaBanner-1.png';
import banner2 from '../../assets/banner/visvaBanglaBanner-2.png';
import banner3 from '../../assets/banner/visvaBanglaBanner-3.png';

const slides = [
  {
    img: banner1,
    badge: 'Welcome To VisvaBangla',
    title: 'Discover the Power of Yoga & Meditation',
    desc: 'Begin your wellness journey with expert-led classes designed for all levels. Find peace, strength and balance.',
    ctaPath: '/media',
    ctaText: 'Explore Classes',
  },
  {
    img: banner2,
    badge: 'Find Your Inner Peace',
    title: 'Start Your Morning with Mindful Yoga Flow',
    desc: 'A gentle morning routine that energizes your body and clears your mind before the day begins.',
    ctaPath: '/media/audio',
    ctaText: 'Listen Now',
  },
  {
    img: banner3,
    badge: 'Transform Your Life',
    title: 'Build Strength & Balance Through Meditation',
    desc: 'Challenge yourself with power yoga and guided meditation sessions led by certified instructors.',
    ctaPath: '/media/video',
    ctaText: 'Watch Videos',
  },
];

const Hero = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full  max-h-screen h-175 overflow-hidden bg-gray-950">
      {/* Custom Style Overrides */}
      <style>{`
        .hero-swiper .swiper-slide-active .ken-burns-img {
          transform: scale(1.08);
        }
        
        .hero-swiper .swiper-pagination {
          bottom: 2.5rem !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          z-index: 40 !important;
        }
        
        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4) !important;
          width: 8px !important;
          height: 8px !important;
          margin: 0 !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1 !important;
        }
        
        .hero-swiper .swiper-pagination-bullet-active {
          background: #ffffff !important;
          width: 26px !important;
          border-radius: 9999px !important;
        }

        /* Pure CSS Content Animation */
        .hero-swiper .swiper-slide-active .animate-fade-up {
          animation: fadeInUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Swiper
        className="hero-swiper h-full w-full"
        modules={[Autoplay, Pagination, EffectFade]}
        effect={'fade'}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ 
          clickable: true,
          dynamicBullets: false
        }}
        loop={true}
        speed={1000}
        allowTouchMove={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative w-full h-full overflow-hidden">
            {/* Background Image & Cinematic Overlay */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="ken-burns-img w-full h-full object-cover transition-transform duration-5000 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            {/* Slide Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
              <div className="max-w-4xl mx-auto flex flex-col items-center gap-5 md:gap-8">
                
                {/* Badge */}
                <span className="animate-fade-up opacity-0 [animation-delay:150ms] px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs tracking-widest font-semibold backdrop-blur-md border border-white/15 uppercase">
                  {slide.badge}
                </span>

                {/* Title */}
                <h1 className="animate-fade-up opacity-0 [animation-delay:350ms] text-5xl md:text-6xl lg:text-7xl font-light text-white/95 leading-[1.2] tracking-tight max-w-3xl">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="animate-fade-up opacity-0 [animation-delay:550ms] text-gray-300 text-sm md:text-base md:max-w-xl max-w-sm leading-relaxed font-light hidden">
                  {slide.desc}
                </p>

                {/* CTA Button */}
                <div className="animate-fade-up opacity-0 [animation-delay:750ms] mt-2">
                  <NavLink
                    to={slide.ctaPath}
                    className="inline-block px-10 py-4 rounded-full bg-white text-secondary font-bold text-xs tracking-wider uppercase shadow-lg hover:bg-[#06a4a7] hover:text-white transition-all duration-300 transform"
                  >
                    {slide.ctaText}
                  </NavLink>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Aligned Controller (Arrows + Page Index) */}
      <div className="absolute bottom-9 right-6 lg:right-12 z-50 flex items-center gap-4 bg-transparent select-none">
        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-white/50 hover:text-white transition-colors duration-200"
          aria-label="Previous slide"
        >
          <HiOutlineArrowSmLeft size={24} />
        </button>

        {/* Dynamic Page Index Indicator (e.g., 01 / 03) */}
        <div className="text-white/90 font-mono text-sm tracking-wider min-w-11">
          {String(activeIndex + 1).padStart(2, '0')}{' '}
          <span className="text-white/30">/</span>{' '}
          {String(slides.length).padStart(2, '0')}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="text-white/50 hover:text-white transition-colors duration-200"
          aria-label="Next slide"
        >
          <HiOutlineArrowSmRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;