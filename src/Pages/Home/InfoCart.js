import React from 'react';

const InfoCart = ({ img, cardTitle, bgClass }) => {

    return (
        <div className=''>
            <div className={` card lg:card-side bg-base-100  shadow-xl text-white ${bgClass} px-8 pt-2`}>
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCart;