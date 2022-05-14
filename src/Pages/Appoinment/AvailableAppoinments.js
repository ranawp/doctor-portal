import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2 className='text-secondary text-center text-bold'>You have selected:{format(date, 'PP')}</h2>
            <div>

            </div>
        </div>
    );
};

export default AvailableAppoinments;