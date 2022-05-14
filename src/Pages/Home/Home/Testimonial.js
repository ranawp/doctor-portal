import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import People1 from '../../../assets/images/people1.png'
import People2 from '../../../assets/images/people2.png'
import People3 from '../../../assets/images/people3.png'
import ReviewCart from '../ReviewCart';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'winson Herry',
            review: '',
            location: 'calofornia',
            img: People1
        },
        {
            _id: 2,
            name: 'winson Herry',
            review: '',
            location: 'calofornia',
            img: People2
        },
        {
            _id: 3,
            name: 'winson Herry',
            review: '',
            location: 'calofornia',
            img: People3
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">
                        Testimonial
                    </h4>
                    <h2 className='text-3xl'>What our Patient say</h2>
                </div>
                <div>
                    <img src={quote} className='lg:w-48 w-24 ' alt="quote" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <ReviewCart
                        key={review._id}
                        review={review}
                    >

                    </ReviewCart>)
                }
            </div>
        </section>
    );
};

export default Testimonial;