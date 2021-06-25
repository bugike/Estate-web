import React from 'react';
import InfoSection from '../components/InfoSection';
import { ThankYou } from '../data/InfoData';

const About = () => {
    return (
        <InfoSection {...ThankYou} />
    );
}

export default About;
