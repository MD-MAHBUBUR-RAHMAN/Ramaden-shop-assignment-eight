import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const[products, setProducts]=useState([]);
    const[cartItem, setCartItem]=useState([])
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])

    // Event Handler for AddTOCart :====
    const handlerOnClick = item =>{
        setCartItem([...cartItem, item])
    }
    //Event Handler For Clear Cart:====
    const clearCart = ()=>{
        setCartItem([])
    }
    // Random one selection if element exist in cart:=====
    const random = ()=>{
        let randomItem = cartItem[Math.floor(Math.random()*cartItem.length)];
        setCartItem([randomItem])
    }

    return (
        <div className='shop-container'>
            <div className="product-container row g-4 mx-5">
                {
                    products.map(product=><Product key={product.id} product={product} click={handlerOnClick}/>)
                }
            </div>
            
            <div className="cart-container bg-info">
                <h4 className='ms-4 mt-5'>Selected Item</h4>
                {
                    cartItem.map((elements,index)=><Cart key={index} elements={elements}></Cart>)
                }

                <button onClick={random} className='bg-secondary bg-gradient rounded-3 text-white ms-2'>Choose one</button>
                <button onClick={clearCart} className='bg-secondary bg-gradient rounded-3 text-white ms-2'>Clear Cart</button>
                
            </div>
        </div>
    );
};

export default Shop;