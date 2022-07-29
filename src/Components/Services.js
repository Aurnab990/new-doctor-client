import React from 'react';
import Exceptional from './Exceptional';
import Serviceslist from './Serviceslist';

const Services = () => {
    return (
        <div className='mt-24'>
            <h1 className='text-center font-bold font-sans text-accent text-lg uppercase'>Our Services</h1>
            <h2 className='text-center text-2xl font-sans mt-5'>Services We Provide</h2>
            <Serviceslist></Serviceslist>
            <Exceptional></Exceptional>
        </div>
    );
};

export default Services;