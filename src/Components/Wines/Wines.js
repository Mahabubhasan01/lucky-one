import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Wine from '../Wine/Wine';
import './Wines.css'

const Wines = () => {
    const [wines,setWines] = useState([]);
    const [carts,setCarts] = useState([])
    
    

    useEffect(() => {
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setWines(data))
        
    },[])
    
    const handleCart = (wine) =>{
        const newCart = [...carts,wine];
        setCarts(newCart)
        // console.log(wine)
    }
    const allReset =()=>{
        const newCart =[]
        setCarts(newCart)
        //  console.log(wines.length)
    }
    /* const choseRandom = (carts) =>{
        console.log(carts)
    } */
    const choseRandom=(num)=>{
        const randomNumber = Math.floor(Math.random() * num) + 1;
        const random = Math.floor(Math.random() * num) + 1;
        if(randomNumber)
            alert('Wow Hurray your favorite item s '+ random)

    }
    

    return (
        <div>
            <h2>Wines Gallery</h2>
            <h2>Find your favorite wine here</h2>
            <div className='wines-body'>
            
            <div className="wines">
                
            {
                 wines.map(wine=>
                    
                 <Wine
                 key={wine.id}
                 wine={wine}
                 handleCart={handleCart}
                 
                 ></Wine>)
             }
            </div>
             <div className='wines-info'>
             <h2>Your Selected Wines</h2>
                {
                    carts.map(cart=><Cart
                    cart={cart}
                    key={cart.id}
                    ></Cart>)
                }
                {
                    /* wines.map(cart=><Select 
                        cart={cart}
                        key={cart.id}
                    ></Select>) */
                }
                <div className='two-button'> 
                <p><button onClick={()=>choseRandom(wines.length)} className='one'>Select one</button></p>
                    <p><button  onClick={()=>allReset()}  className='two'>Reset all<FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button></p>
                   </div>
             </div>
             
         </div>
        </div>
        
    );
};

export default Wines;