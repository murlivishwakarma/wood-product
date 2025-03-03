import React from 'react';
import Navbar from '../header/Header';
import { Outlet } from 'react-router-dom';

const layout = () => {
    return (<>
        <Navbar/>
        <Outlet/>
        </>
    );
};

export default layout;