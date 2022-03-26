import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Wine from '../Wine/Wine';
import './Wines.css'

const Wines = () => {
    const [wines,setWines] = useState([]);

    useEffect(() => {
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setWines(data))
        
    },[])

    const handleCart = (selectedProduct) => {
        // console.log(product)
        let newCart=[]
        const exist = wines.find(product=>product.id===selectedProduct.id);
        if(!exist){
            selectedProduct.quantity=1;
            newCart = [...wines,selectedProduct]
        }
        else{
            const rest = wines.filter(product=>product.id!==selectedProduct.id);
            exist.quantity=exist.quantity+1
            newCart=[...rest,exist];
        }
        setWines(newCart)
        // addToDb(selectedProduct.id)
            
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
             <Cart cart={Cart}></Cart>
             </div>
             
         </div>
        </div>
        
    );
};

export default Wines;