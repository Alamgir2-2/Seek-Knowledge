import React from 'react';
import './Header.css'
import logo from '../images/alamgir.jpg'

const Header = () => {
    return (
        <nav className='header'>
            <h2>Seek Knowledge</h2>
            <div>
                <img src={logo} alt="" />
            </div>
        </nav>
    );
};

export default Header;