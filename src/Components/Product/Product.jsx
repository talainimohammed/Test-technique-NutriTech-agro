import React, { useState }  from 'react';
import './Product.css';
import Star from '../Assets/star.png';
import Addtocart from '../Assets/addplus.png';
import Produitlogo from '../Assets/agrosol-k12.png';
import ProductInfo from '../Productinfos/ProductInfo';
const Product = (props) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleClick = () => {
        setShowInfo(!showInfo);
    };
    return (
        <div className={props.className} onClick={handleClick}>
           {<div>
                <h1>{props.name}</h1>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img className='productlogo' src={'http://127.0.0.1:8000'+props.image} alt="produitlogo"/>
                        </div>
                        <div className='flip-card-back'>
                            <h1>Product Information</h1> 
                            <p>{props.name}</p>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
                <p className='price'>Prix:<span>{props.price}MAD</span></p>
                <p className='review'><img src={Star} alt="star" height={30} /><span>4.9</span>
                <a><img src={Addtocart} alt="addtocart" height={40}/></a></p>
            </div>
            }{showInfo && (
                <ProductInfo key={props.key} name={props.name} description={props.description} price={props.price} image={props.image}/>
            )}   
     </div>
    );
};

export default Product;