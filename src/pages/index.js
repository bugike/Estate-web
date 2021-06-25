import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Listing from '../components/Listing';
import Features from '../components/Features';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import { SliderDataOne } from '../data/SliderData';
import { FeatureData } from '../data/FeatureData';


const Home = () => {
    return (
        <>
            <Hero slides={SliderDataOne} />
            <InfoSection {...InfoData} />
            <Listing />
            <Features {...FeatureData}/>
            <InfoSection {...InfoDataTwo} />
        </>
    );
}

export default Home;
