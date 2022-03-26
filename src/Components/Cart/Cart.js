
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
// import {FaGithub} from 'react-icons-fa'
import './Cart.css'


const Cart = ({cart}) => {
    
    const {img,name}=cart

    return (

            <div className='side-box'>

                <div className='add-info'>
                    <p ><img src={img} alt="" /></p>
                    <h5>{name}</h5>
                    <p><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></p>

                </div>
                   
            </div>
    );
};

export default Cart;