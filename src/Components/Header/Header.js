import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-box'>
                <div className='logo'><h2>Wines Galery</h2></div>
                <div className='info'>
                    <nav>
                        <a href="/Home">Home</a>
                        <a href="/store">Store</a>
                        <a href="/category">Category</a>
                        <a href="/about">About</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;