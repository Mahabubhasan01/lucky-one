import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Wine.css'
// import {BsGithub} from 'react-icons/fa'


const Wine = ({handleCart,wine}) => {
    const {img,name,id,price,category} = wine
    // const {handleCart,wine} = props
    
    // const {img,name,id,price,category} = props.wine
    // const {handleCart} =props
    return (
        <div className='wine'>
            <img className='img' src={img} alt="" />
            <div>
                <h4>Name : {name}</h4><br />
                <h5>Price : ${price}</h5><br />
                <h6>Category : {category}</h6>
            </div>
            <button onClick={()=>handleCart(wine)} className='btn'>
                <h4>Add To Cart<FontAwesomeIcon className='icn' icon={faShoppingCart}></FontAwesomeIcon></h4>
            </button>
        </div>
    );
};

export default Wine;