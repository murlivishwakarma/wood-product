import React from 'react';
import Navbar from '../header/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer.jsx';

const layout = () => {
    return (<>
        {/* <Navbar/> */}
        <Outlet/>
        <Footer/>
        </>
    );
};

export default layout;