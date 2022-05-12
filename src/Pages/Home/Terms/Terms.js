import React from 'react';
import treactment from '../../../assets/images/treatment.png'

const Terms = () => {
    return (
        <div className='mx-12 mt-12'>
            <div class="card card-side bg-base-100 ">
                <figure><img style={{ width: '300px' }} className='' src={treactment} alt="Movie" /></figure>
                <div class="card-body mr-12">
                    <h2 class="card-title">Exceptional Dental Care on Your Terms</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis commodi eligendi doloremque a, officia saepe quae accusamus ullam repellat qui?Facilis commodi eligendi doloremque a, officia saepe quae accusamus ullam repellat qui?Facilis commodi eligendi doloremque a, officia saepe quae accusamus ullam repellat qui?Facilis commodi eligendi doloremque a, officia saepe quae accusamus ullam repellat qui?Facilis commodi eligendi doloremque a, officia saepe quae accusamus ullam repellat qui?</p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;