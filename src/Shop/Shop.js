import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const[products, setProducts]=useState([]);
    const[cartItem, setCartItem]=useState([])
    console.log(cartItem)
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])

    const handlerOnClick = e =>{
        setCartItem([...cartItem, e])
    }



    return (
        <div className='shop-container'>
            <div className="product-container row g-4 mx-5">
                {
                    products.map(product=><Product key={product.id} product={product} click={handlerOnClick}/>)
                }
            </div>
            <div className="cart-container bg-info">
            <h3>Selected Item</h3> 
            <div><p>name : {cartItem}</p></div>
            <button>Choose one</button>
            <button>Choose again</button>
            </div>
        </div>
    );
};

export default Shop;