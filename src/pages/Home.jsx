import React from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedClasses from '../components/FeaturedClasses/FeaturedClasses';
import AboutUs from '../components/AboutUs/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Trainers from '../components/Trainers/Trainers';
import Events from '../components/Events/Events';
import Testimonials from '../components/Testimonials/Testimonials';
import CallToAction from '../components/CallToAction/CallToAction';
import BlogSection from '../components/Blog/Blog';

const Home = () => {
    return (
        <div className='min-h-dvh'>
            <Hero />
            <AboutUs />
            <FeaturedClasses />
            <WhyChooseUs />
            <div className="pt-130 lg:pt-75">
              <Trainers />
            </div>
            <Events />
            <Testimonials />
            <CallToAction />
            <BlogSection />
        </div>
    );
};

export default Home;
