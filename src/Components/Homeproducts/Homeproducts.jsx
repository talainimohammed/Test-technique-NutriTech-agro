import React from 'react';
import './Homeproducts.css';
import Product from '../Product/Product';
const Homeproducts = () => {
    return (
        <div className='homeproduct'>
            <h1>Nos Produits</h1>
             <Product className='productstyle' />
             <Product className='productstyle'/>
             <Product className='productstyle'/>
             <Product className='productstyle'/>
            <button className='btn'>Voir Plus</button>
        </div>
    );
};

export default Homeproducts;