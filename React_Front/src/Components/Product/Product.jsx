import React, { useState }  from 'react';
import './Product.css';
import Star from '../Assets/star.png';
import Addtocart from '../Assets/addplus.png';
import ProductInfo from '../Productinfos/ProductInfo';
const Product = ({className,productItem}) => {
    const [showInfo, setShowInfo] = useState(false);
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setShowInfo(!showInfo);
    };
    return (
        <div className={className} onClick={handleClick}>
           {<div>
                <h1>{productItem.name}</h1>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img className='productlogo' src={'https://djangobackend-a2a0ae47b6ab.herokuapp.com'+productItem.image} alt="produitlogo"/>
                        </div>
                        <div className='flip-card-back'>
                            <h1>Product Information</h1> 
                            <p>{productItem.name}</p>
                            <p>{productItem.description.split(' ').slice(0, 10).join(' ')}<br/><strong>Afficher Plus</strong></p>
                        </div>
                    </div>
                </div>
                <p className='price'>Prix:<span>{productItem.price}MAD</span></p>
                <p className='review'><img src={Star} alt="star" height={30} /><span>4.9</span>
                <a><img src={Addtocart} alt="addtocart" height={40}/></a></p>
            </div>
            }{showInfo && (
                <ProductInfo productItem={productItem}/>
            )}   
     </div>
    );
};

export default Product;