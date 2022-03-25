import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, click}) => {
    const {name,picture,id,price}=product;
    // const {click}= props;
    // console.log(props)

    return (
            <div className="col-12 col-md-4 mt-5">                
                    <div className="card img-fluid">
                        <img src={picture} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name: {name}</h5>
                            <p className="card-text">{id}</p>
                             <p className="card-text">Price: TK {price}</p>
                             <button className='bg-info bg-gradient rounded-3 border-0' onClick={()=>click(name)}>Add to cart</button>
                             <FontAwesomeIcon icon={faCartShopping} className="ms-3 text-primary fs-5"/>
                            
                        </div>
                    </div>
            </div>
    );
};

export default Product;