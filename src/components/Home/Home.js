import React from 'react';
import './Home.css';
import image from '../../images/laptop.jpg';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const Home = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className="left-side mt-24 ml-28">
                    <h2 className='text-5xl font-bold'>The best Laptop</h2>
                    <h2 className='text-5xl font-bold text-blue-500'>You can buy it</h2>
                    <p className='text-xl mt-5 text-gray-400'>This laptop is from hp brand.It is very good laptop.It's work so fast.
                        <br/>You can buy this laptop for your personal use.</p>
                    <button className='bg-green-300 p-2 rounded mt-5 text-blue-600 pl-5 pr-5 font-bold'>Live Demo</button>
                </div>
                <img className='text-center ml-10' src={image} alt="" />
            </div>
            <div>
                <h2 className='text-center text-4xl mt-10'>Customer Reviews</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 my-9'>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
            </div>
            <Link to='/reviews' className='review-btn text-center'>See All Reviews</Link>
        </div>
    );
};

export default Home;