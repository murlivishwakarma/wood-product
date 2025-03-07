import React from 'react';
import Navbar from '../../components/header/Header';
import ImageSlider from '../OurWork/OurWork';
import Question from '../Question/Question';
import AboutUs from '../AboutUs/AboutUs';

const About = () => {
    return (
       <>
       <Navbar/>
       <AboutUs/>
       <ImageSlider/>
       <Question/>
       </>
    );
};

export default About;