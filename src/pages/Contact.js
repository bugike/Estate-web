import React from 'react';
import InfoSection from '../components/InfoSection';
import { ContactUs } from '../data/InfoData';

const Contact = () => {
    return (
        <InfoSection {...ContactUs} />
    );
}

export default Contact;
