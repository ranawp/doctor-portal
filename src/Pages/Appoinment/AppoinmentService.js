import React from 'react';

const AppoinmentService = ({ AppoinmentService, setTreatment }) => {
    const { name, slots } = AppoinmentService;



    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date.</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} spaces available</p>
                <div className="card-actions justify-center">

                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(AppoinmentService)}
                        className="btn btn-secondary text-white">Book Appoinmnet</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentService;