import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Trainers from '../components/Trainers/Trainers';
import AboutVision from '../components/AboutVision/AboutVision';
import AboutValues from '../components/AboutValues/AboutValues';

const Trainer = () => {
    return (
        <div>
            <Breadcrumb />
            <Trainers />
            <AboutVision />
            <AboutValues />
        </div>
    );
};

export default Trainer;
