import React from 'react';
import AppoinmentSection from '../AppoinmentSection/AppoinmentSection';

import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Service from '../Service/Service';
import Terms from '../Terms/Terms';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Terms></Terms>
            <AppoinmentSection></AppoinmentSection>
        </div>
    );
};

export default Home;