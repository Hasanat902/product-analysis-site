import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h2 className='text-center text-4xl mt-10'>What our Customers say!</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 mt-9'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;