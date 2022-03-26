import React from 'react';
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
                <h6>Add To Cart</h6>
            </button>
        </div>
    );
};

export default Wine;