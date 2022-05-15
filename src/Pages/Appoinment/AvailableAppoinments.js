import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import AppoinmentService from './AppoinmentService';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-secondary text-center text-bold'>You have selected:{format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12'>
                {
                    services.map(service => <AppoinmentService
                        key={service._id}
                        AppoinmentService={service}
                        setTreatment={setTreatment}
                    >

                    </AppoinmentService>)
                }
            </div>
            {treatment && <BookingModal date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;