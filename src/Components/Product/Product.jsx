import React from 'react';
import './Product.css';
import Star from '../Assets/star.png';
import Addtocart from '../Assets/addplus.png';
import Produitlogo from '../Assets/agrosol-k12.png';
const Product = (props) => {
    return (
        <div className={props.className}>
            <h1>AGROSOL-K12</h1>
            <div className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img className='productlogo' src={Produitlogo} alt="produitlogo"/>
                    </div>
                    <div className='flip-card-back'>
                        <h1>Product Information</h1> 
                        <p>AGROSOL-K12</p>
                        <p>AGROSOL-K12</p>
                    </div>
                </div>
            </div>
            <p className='price'>Prix:<span>000MAD</span></p>
            <p className='review'><img src={Star} alt="star" height={30} /><span>4.9</span><a><img src={Addtocart} alt="addtocart" height={40}/></a></p>
        </div>
    );
};

export default Product;