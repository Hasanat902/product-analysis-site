import React from 'react';
import './NotFound.css';
import image from '../../images/not-found.jpg';

const NotFound = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-28'>
            <div>
                <h2 className='text-center text-3xl text-red-500 mt-28'>The page you requested is not found</h2>
                <p className='text-center text-xl text-green-500'>Please try again later</p>
            </div>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;