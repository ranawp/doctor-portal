import React from 'react';
import AppoinmentSection from '../AppoinmentSection/AppoinmentSection';

import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm';
import Info from '../Info/Info';
import Service from '../Service/Service';
import Terms from '../Terms/Terms';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Terms></Terms>
            <AppoinmentSection></AppoinmentSection>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;