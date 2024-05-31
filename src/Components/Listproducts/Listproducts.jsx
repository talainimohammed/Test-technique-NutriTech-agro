import React from 'react';
import './Listproducts.css';
import Product from '../Product/Product';

const productStyle = {
    color: 'red',
    backgroundColor: 'yellow',
    // add more styles as needed
};
const Listproducts = () => {
    let products = [];
    for (let i = 0; i < 12; i++) {
        products.push(<Product className='product' key={i} />);
    }
    return (
        <div className='listproducts'>
            <h1>Nos Produits</h1>
            {products}
        </div>
    );
};

export default Listproducts;