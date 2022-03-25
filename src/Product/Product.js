import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, click}) => {
    const {name,picture,id,price}=product;
    // const {click}= props;
    // console.log(props)

    return (
            <div className="col-md-4 mt-5">                
                    <div className="card">
                        <img src={picture} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Product Name: {name}</h5>
                            <p className="card-text">{id}</p>
                             <p className="card-text">Price: TK {price}</p>
                             <button onClick={()=>click(name)}>Add to cart</button>
                             <FontAwesomeIcon icon={faCartShopping}/>
                            
                        </div>
                    </div>
            </div>
    );
};

export default Product;