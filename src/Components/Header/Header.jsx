import React from 'react';
import './Header.css';
import headerimg from '../Assets/AZOTEC.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='headeroverlay'>
                <h1>Soutenir votre croissance</h1>
                <h3> avec des produits de qualité</h3>
            </div>
           <div className='headerimage'>
            <img src={headerimg} alt="AZOTEC"/>
           </div>
        </div>
    );
};

export default Header;