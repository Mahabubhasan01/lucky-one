import React from 'react';
import './Wine.css'
// import {BsGithub} from 'react-icons/fa'


const Wine = (props) => {
    const {img,name,id,price,category} = props.wine
    console.log(id)
    return (
        <div className='wine'>
            <img src={img} alt="" />
            <div>
                <h4>Name : {name}</h4><br />
                <h5>Price : ${price}</h5><br />
                <h6>Category : {category}</h6>
            </div>
            <button onClick={()=>props.handleCart(props.wine)}
             className='btn'>
                <h6>Add To Cart</h6>
                {/* <p><BsGithub></BsGithub></p> */}
            </button>
        </div>
    );
};

export default Wine;