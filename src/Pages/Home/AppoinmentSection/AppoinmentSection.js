import React from 'react';
import doctors from '../../../assets/images/doctor-small.png'
import appoinment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Shared/PrimaryButton';
const AppoinmentSection = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex justify-center items-center mt-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-50px]' src={doctors} alt="" />
            </div>
            <div className='flex-1 p-6'>
                <h3 className='text-xl text-primary'>Appoinment</h3>
                <h2 className='text-white'>Make an appoinment Today</h2>
                <p className='text-white my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint illum ipsum tenetur, consequatur omnis minima nihil ipsa nisi nam numquam? Ullam provident voluptates error libero dignissimos vel perspiciatis minima? Officiis.</p>
                <PrimaryButton >Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default AppoinmentSection;