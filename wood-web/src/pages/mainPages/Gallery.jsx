import React from 'react';
import Navbar from '../../components/header/Header.jsx';
import WoodWeWorkWith from '../wood-we-work-with/WoodWeWorkWith.jsx';
import ImageSlider from '../OurWork/OurWork.jsx';
import Question from '../Question/Question.jsx';
import Footer from '../../components/footer/Footer.jsx';
const Gallery = () => {
    return (
        <>
        <Navbar/>
        <ImageSlider/>
        <WoodWeWorkWith/>
        <Question/>
        {/* <Footer /> */}
        </>
    );
};

export default Gallery;