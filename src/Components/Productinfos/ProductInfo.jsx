import React from 'react';
import './ProductInfo.css';
import ProductImage from '../Assets/agrosol-k12.png';
import Star from '../Assets/star.png';
const ProductInfo = () => {
    return (
        <div className='product-info'>
            <div className='product-info-image'>
                <img src={ProductImage} alt="agrosol-k12" />
            </div>
            <div className='product-info-text'>
                <h2>AGROSOL-K12</h2>
                <p><img src={Star} alt="review star" height={30} /><img src={Star} alt="review star" height={30} /><img src={Star} alt="review star" height={30} /><img src={Star} alt="review star" height={30} /><img src={Star} alt="review star" height={30} /></p>
                <h4>Description de Produit:</h4>
                <p className='product-description'>Agrosol-K12 est un engrais organique liquide à base de potassium. Il est recommandé pour les cultures de fruits, de légumes et de fleurs. Il est également recommandé pour les cultures de céréales, de légumineuses et de plantes fourragères. Il est recommandé pour les cultures de fruits, de légumes et de fleurs. Il est également recommandé pour les cultures de céréales, de légumineuses et de plantes fourragères.</p>
                <div className='product-info-price'>
                    <h3><strong>Prix:</strong>1000MAD</h3>
                </div>
                <div className='product-info-add'>
                    <button>Ajouter au panier</button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;