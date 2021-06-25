import React from 'react';
import Features from '../components/Features';
import InfoSection from '../components/InfoSection';
import HomeDisplay from '../components/HomeDisplay';
import { InfoDataFour, InfoDataThree } from '../data/InfoData';
import { FeatureDataTwo } from '../data/FeatureData';
import { HomeDisplayData } from '../data/HomeDisplayData';

const Detail = () => {
    return (
        <>
            <HomeDisplay {...HomeDisplayData} />
            <InfoSection {...InfoDataThree} />
            <Features {...FeatureDataTwo}/>
            <InfoSection {...InfoDataFour} />
        </>
    )
}

export default Detail
