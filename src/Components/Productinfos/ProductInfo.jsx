import React, { useEffect, useRef, useState }  from 'react';
import './ProductInfo.css';
import ProductImage from '../Assets/agrosol-k12.png';
import Star from '../Assets/star.png';
const ProductInfo = (props) => {
    const [showInfo, setShowInfo] = useState(true);
    const infoRef = useRef();

    const handleClickOutside = (event) => {
        if (infoRef.current && !infoRef.current.contains(event.target)) {
            setShowInfo(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!showInfo) {
        return null;
    }
    return (
        <div className='product-info'>
            <div className='product-info-image'>
                <img src={'http://127.0.0.1:8000'+props.image} alt="agrosol-k12" />
            </div>
            <div className='product-info-text'>
                <h2>{props.name}</h2>
                <p><img src={Star} alt="review star" height={30} /><img src={Star} alt="review star" height={30} /><img src={Star} alt="review star" height={30} /><img src={Star} alt="review star" height={30} /><img src={Star} alt="review star" height={30} /></p>
                <h4>Description de Produit:</h4>
                <p className='product-description'>{props.description}</p>
                <div className='product-info-price'>
                    <h3><strong>Prix:</strong>{props.price}MAD</h3>
                </div>
                <div className='product-info-add'>
                    <button>Ajouter au panier</button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;