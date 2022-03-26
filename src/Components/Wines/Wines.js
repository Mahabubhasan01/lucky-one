import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Wine from '../Wine/Wine';
import './Wines.css'

const Wines = () => {
    const [wines,setWines] = useState([]);
    const [cart,setCart] = useState([])
    

    useEffect(() => {
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setWines(data))
        
    },[])

    
    
    const handleCart = (wine) =>{
        // Cart(wine)
        // console.log(wine)
        const newCart = [...cart,wine];
        setCart(newCart)
    }

    return (
        <div>
            <h2>Wines Galery</h2>
            <div className='wines-body'>
            
            <div className="wines">
                
            {
                 wines.map(wine=><Wine
                 key={wine.id}
                 wine={wine}
                 handleCart={handleCart}
                 
                 ></Wine>)
             }
            </div>
             <div className='wines-info'>
                 <h1>{cart.length}</h1>
             <Cart cart={cart}></Cart>
             </div>
             
         </div>
        </div>
        
    );
};

export default Wines;