import React from 'react';
import { SliderDataTwo } from '../data/SliderData';
import Hero from '../components/Hero';
import { RentalListData, RentalListDataTwo } from '../data/RentalListData';
import HomeList from '../components/HomeList';

const Rentals = () => {
    return (
        <>
            <Hero slides={SliderDataTwo} />
            <HomeList
            heading='Rent Our Amazing Houses'
            dataOne={RentalListData}
            dataTwo={RentalListDataTwo}
            />
        </>
    );
}

export default Rentals;
