import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import banner1     from '../../assets/banner/visvaBanglaBanner-1.jpg';
import banner2 from '../../assets/banner/visvaBanglaBanner-2.jpg';
import banner3   from '../../assets/banner/visvaBanglaBanner-3.jpg';

const slides = [
  {
    img:     banner1,
    badge:   'Welcome To Shunno Yoga',
    title:   'Discover the Power of Yoga & Meditation',
    desc:    'Begin your wellness journey with expert-led classes designed for all levels. Find peace, strength and balance.',
    ctaPath: '/media',
    ctaText: 'Explore Classes',
  },
  {
    img:     banner2,
    badge:   'Find Your Inner Peace',
    title:   'Start Your Morning with Mindful Yoga Flow',
    desc:    'A gentle morning routine that energizes your body and clears your mind before the day begins.',
    ctaPath: '/media/audio',
    ctaText: 'Listen Now',
  },
  {
    img:     banner3,
    badge:   'Transform Your Life',
    title:   'Build Strength & Balance Through Meditation',
    desc:    'Challenge yourself with power yoga and guided meditation sessions led by certified instructors.',
    ctaPath: '/media/video',
    ctaText: 'Watch Videos',
  },
];

const Hero = () => {
  const swiperRef = useRef(null);

  const applyZoom = (swiper) => {
    // remove zoom from all slides
    swiper.slides.forEach(slide => {
      const img = slide.querySelector('.hero-img');
      if (img) img.classList.remove('hero-img--zoom');
    });
    // add zoom to current active slide
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      const img = activeSlide.querySelector('.hero-img');
      if (img) {
        // force reflow so transition plays from scale(1)
        void img.offsetWidth;
        img.classList.add('hero-img--zoom');
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      <style>{`
        .hero-swiper { overflow: hidden !important; }
        .hero-swiper .swiper-wrapper { align-items: stretch; }
        .hero-swiper .swiper-slide { overflow: hidden; }
        .hero-img {
          transform: scale(1);
          transition: transform 6s ease;
        }
        .hero-img--zoom {
          transform: scale(1.1);
        }
        .swiper-pagination-bullet {
          background: white; opacity: 0.5; width: 8px; height: 8px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1; width: 24px; border-radius: 4px; background: #06a4a7;
        }
      `}</style>

      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        loop={true}
        speed={900}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={swiper => {
          swiperRef.current = swiper;
          // wait for DOM to be ready before applying zoom
          setTimeout(() => applyZoom(swiper), 50);
        }}
        onSlideChangeTransitionStart={applyZoom}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[87vh] min-h-125">
              <img
                src={slide.img}
                alt={slide.title}
                className="hero-img absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
                  <span className="px-5 py-2 rounded-full bg-secondary/20 text-white text-sm font-medium backdrop-blur-sm border border-white/20">
                    {slide.badge}
                  </span>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>
                  <NavLink
                    to={slide.ctaPath}
                    className="px-8 py-3.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-white hover:text-secondary transition-all duration-300"
                  >
                    {slide.ctaText}
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors duration-200"
        aria-label="Previous"
      >
        <MdChevronLeft size={24} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors duration-200"
        aria-label="Next"
      >
        <MdChevronRight size={24} />
      </button>
    </section>
  );
};

export default Hero;
