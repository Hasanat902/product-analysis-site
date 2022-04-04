import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='text-center mt-3'>
                <Link className='mr-5 text-blue-400' to='/home'>HOME</Link>
                <Link className='mr-5 text-blue-400' to='/reviews'>REVIEWS</Link>
                <Link className='mr-5 text-blue-400' to='/dashboard'>DASHBOARD</Link>
                <Link className='mr-5 text-blue-400' to='/blogs'>BLOGS</Link>
                <Link className='mr-5 text-blue-400' to='/about'>ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;