import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Wine from '../Wine/Wine';
import './Wines.css'

const Wines = () => {
    const [wines,setWines] = useState([])

    useEffect(() => {
        fetch('tree.json').then(res=>res.json()).then(data=>setWines(data))
    },[])
    return (
        <div className='wines-body'>
           <div className="wines">
           {
                wines.map(wine=><Wine
                key={wine.id}
                wine={wine}
                ></Wine>)
            }
           </div>
            <div className='wines-info'>
            
            <Cart cart={Cart}></Cart>
            </div>
            
        </div>
        
    );
};

export default Wines;