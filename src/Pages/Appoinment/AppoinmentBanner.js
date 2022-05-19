import React, { useState } from 'react';
import chair from '../../../src/assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const AppoinmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='max-w-sm rounded-lg shadow-2xl img-fluid' src={chair} />
                <div>
                    <DayPicker mode="single"
                        selected={date}
                        onSelect={setDate}>

                    </DayPicker>

                </div>

            </div>

        </div>
    );
};

export default AppoinmentBanner;