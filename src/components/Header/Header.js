import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='text-center mt-3'>
                <Link className='mr-5 text-blue-400 font-bold' to='/home'>HOME</Link>
                <Link className='mr-5 text-blue-400 font-bold' to='/reviews'>REVIEWS</Link>
                <Link className='mr-5 text-blue-400 font-bold' to='/dashboard'>DASHBOARD</Link>
                <Link className='mr-5 text-blue-400 font-bold' to='/blogs'>BLOGS</Link>
                <Link className='mr-5 text-blue-400 font-bold' to='/about'>ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;