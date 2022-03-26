import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-box'>
                <div className='logo'><h2>Wines Gallery</h2></div>
                <div className='info'>
                    <nav>
                        <ul>
                       <li><a href="/Home">Home</a></li>
                       <li><a href="/store">Store</a></li>
                        <li><a href="/about">About</a></li>
                        <li>
                        <a href="/category">Category
                        <div className='category'> 
                       
                            <ul>
                                <li>Best overall wine</li>
                                <li>Best premium</li>
                                <li>Best value</li>
                                <li>Most expensive</li>
                                <li>Best Cabernet Sauvignon</li>
                                <li>Best Merlot</li>
                                <li>Best Sauvignon Blanc</li>
                                <li>Best Pinot Gris</li>
                                <li>Best Riesling</li>
                                <li>Best Syrah</li>
                                
                            </ul>
                        </div>
                        </a>
                        </li>
                        </ul>
                       
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;