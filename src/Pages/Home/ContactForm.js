import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import appoinment from '../../assets/images/appointment.png'
const ContactForm = () => {
    return (
        <div style={{
            background: `url(${appoinment})`
        }} className='text-center py-5' >
            <div className='	'>
                <h3 className='text-primary font-bold mt-5'>Contact Us</h3>
                <h3 className='text-white my-3'>Stay Connected With Us</h3>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> <br />
                    <input style={{ marginTop: '1rem', marginBottom: '1rem' }} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> <br />
                    <textarea style={{ width: '20rem' }} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    <PrimaryButton className='mx-5'>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;