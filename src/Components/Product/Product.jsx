import React from 'react';
import './Product.css';
import Star from '../Assets/star.png';
import Addtocart from '../Assets/addplus.png';
import Produitlogo from '../Assets/agrosol-k12.png';
const Product = (props) => {
    return (
        <div className={props.className}>
            <h1>AGROSOL-K12</h1>
            <img className='productlogo' src={Produitlogo} alt="produitlogo"/>
            <p className='price'>Prix:<span>000MAD</span></p>
            <p className='review'><img src={Star} alt="star" height={30} /><span>4.9</span><a><img src={Addtocart} alt="addtocart" height={40}/></a></p>
        </div>
    );
};

export default Product;