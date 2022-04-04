import React from 'react';
import './Home.css';
import image from '../../images/laptop.jpg';

const Home = () => {
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
        </div>
    );
};

export default Home;