import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contactez-nous</h1>
            <div className='contact-form'>
                <form>
                    <input type='text' placeholder='Nom' /><br />
                    <input type='email' placeholder='Email' /><br />
                    <input type='text' placeholder='Sujet' /><br />
                    <textarea placeholder='Message' />
                    <button>Envoyer</button>
                </form>
            </div>
            <div className='contact-info'>
                <h2>Informations de Contact</h2>
                <p><strong>Adresse:</strong> 123 rue des fleurs, Paris, France</p>
                <p><strong>Email:</strong>email@gmail.com</p>
            </div>
        </div>
    );
};

export default Contact;