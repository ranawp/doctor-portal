import React from 'react';
import ServiceCart from './ServiceCart';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Service = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            Description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            Description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            Description: '',
            img: whitening
        },
    ]
    return (
        <div >
            <h1 className='mt-12 text-center text-cyan-500 font-bold text-xl uppercase '>Our Services</h1>
            <p className='text-center text-4xl'>Service we provide</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        serviceCart={service}
                    >

                    </ServiceCart>)
                }
            </div>

        </div>
    );
};

export default Service;