import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import GoToTop from '../components/GoToTop';

const AppLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <GoToTop />
        </>
    );
};

export default AppLayout;