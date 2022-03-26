import React from 'react';
import './Wine.css'

const Wine = (props) => {
    const {img,name,id,price} = props.wine
    console.log(props)
    return (
        <div className='wine'>
            <img src={img} alt="" />
            <div>
                <p>Name : {name}</p>
                <p>Price : {price}</p>
                <p>hhhhhh</p>
            </div>
            <button className='btn'>Add to cart</button>
            <p></p>
        </div>
    );
};

export default Wine;