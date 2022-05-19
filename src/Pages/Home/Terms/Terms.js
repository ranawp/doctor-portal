import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Terms = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={treatment} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Exceptional Dental Care on Your Terms</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis commodi eligendi doloremque a, officia saepe quae accusamus ullam repellat qui?Facilis commodi eligendi doloremque a, officia saepe quae accusamus ullam repellat qui?Facilis commodi eligendi doloremque a, officia saepe quae accusamus ullam repellat qui?Facilis commodi eligendi doloremque a, officia saepe quae accusamus ullam repellat qui?Facilis commodi eligendi doloremque a, officia saepe quae accusamus ullam repellat qui?</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Terms;