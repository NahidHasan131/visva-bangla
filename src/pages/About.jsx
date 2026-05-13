import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import AboutUs from '../components/AboutUs/AboutUs';
import AboutVision from '../components/AboutVision/AboutVision';
import AboutValues from '../components/AboutValues/AboutValues';
import Trainers from '../components/Trainers/Trainers';

const About = () => {
    return (
        <div>
            <Breadcrumb />
            <AboutUs />
            <AboutVision />
            <AboutValues />
            <Trainers />
        </div>
    );
};

export default About;
