import React from 'react';
import HomeList from '../components/HomeList';
import { HomeListData, HomeListDataTwo } from '../data/HomeListData';

const Homes = () => {
    return (
        <HomeList 
        heading='View Our Amazing Houses'
        dataOne={HomeListData}
        dataTwo={HomeListDataTwo}
        />
    );
}

export default Homes;
