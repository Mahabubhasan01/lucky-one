
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
// import {FaGithub} from 'react-icons-fa'
import './Cart.css'


const Cart = (props) => {
    const {name,img,price} =props.cart
    // console.log(props.cart[1].name)
    
    // const {img,price}=props.wine
    return (

            <div className='side-box'>
                
                <h2>Your Selected Wines</h2>
            <h2>Name:</h2>
            
            
            
                   <div className='two-button'> 
                   <p><button className='one'>Select one
                   </button></p>
                    <p><button className='two'>Delete all<FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button></p>
                   </div>
            </div>
    );
};

export default Cart;