import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{elements}=props;
    return (
        <div className='cart'>
             <p className='ms-5'>Product : {elements}</p>
        </div>
    );
};

export default Cart;