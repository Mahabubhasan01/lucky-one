
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
// import {FaGithub} from 'react-icons-fa'
import './Cart.css'


const Cart = ({cart}) => {
    
    const {img,name}=cart

    return (

            <div className='side-box'>
              
                <h1></h1>
                
                <h2>Your Selected Wines</h2>
                <div className='add-info'>
                    <p ><img src={img} alt="" /></p>
                    <p>{name}</p>
                    <p><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></p>
                    
                    

                </div>
                   
            </div>
    );
};

export default Cart;