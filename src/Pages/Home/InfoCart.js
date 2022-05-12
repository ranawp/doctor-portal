import React from 'react';

const InfoCart = ({ img, cardTitle, bgClass }) => {

    return (
        <div className=''>
            <div class={` px-8 card lg:card-side  shadow-xl text-white ${bgClass}`}>
                <figure><img src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title ">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCart;