import React from 'react';
import './Order.css';
import Productlogo from '../Assets/agrosol-k12.png';
import Trash from '../Assets/trash.png';
import Minus from '../Assets/minus.png';
import Plus from '../Assets/plus.png';
const Order = () => {
    return (
        <div className='order'>
            <h1>Votre Panier</h1>
            <div className='list-product'>
                <div className='product-order'>
                    <div className='product-image'><img src={Productlogo} alt="productlogo" /></div>
                    <div className='product-information'>
                        <div className='product-name'><a>AGROSOL-K12</a></div>
                        <div className='product-price'><p><strong>Prix :</strong>500 MAD</p></div>
                        <div className='product-quantity'>
                            <span className='minus'><img src={Minus} alt='-'/></span>
                            <span className='counter'>1</span>
                            <span className='plus'><img src={Plus} alt='+'/></span>
                        </div>
                        <div className='delete-product-cart'><img src={Trash} alt="Delete" /></div>
                    </div>
                </div>
            </div>
            <div className='reciever-information'>
                <h2>Vos Informations:</h2>
                <form>
                    <div className='reciever-name'>
                        <input type='text' placeholder='Nom et Prénom' />
                    </div>
                    <div className='reciever-phone'>
                        <input type='text' placeholder='Numéro de téléphone' />
                    </div>
                    <div className='reciever-email'>
                        <input type='text' placeholder='Email'/>
                    </div>
                    <div className='reciever-address'>
                        <textarea placeholder='Adresse'></textarea>
                    </div>
                </form>
                <hr/>
                <div className='total-price'>
                    <p><strong>Totale de Commande:</strong><span>500 MAD</span></p>
                </div>
                <div className='order-button'>
                    <button>Confirmer votre commande</button>
                </div>
            </div>
        </div>
    );
};

export default Order;