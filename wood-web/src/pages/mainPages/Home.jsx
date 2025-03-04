import React from 'react';
import Navbar from '../../components/header/Header';
import WhatWeOffer from '../what-we-offer/WhatWeOffer';
import WoodWeWorkWith from '../wood-we-work-with/WoodWeWorkWith';
import Question from '../Question/Question';
import Advantages from '../Advantage/Advantage';
import ImageSlider from '../OurWork/OurWork';

const Home = () => {
    return (
        <>
        {/* <Navbar isHome={true} /> */}
        <WhatWeOffer/>
        <WoodWeWorkWith/>
        <ImageSlider/>
        <Advantages/>
        <Question/>
        </>
    );
};

export default Home;