import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className='contact' id='contactus'>
            <div className='contact-form'>
                <h2>Contactez-nous</h2>
                <form>
                    <div><input type='text' placeholder='Nom' /></div>
                    <div><input type='email' placeholder='Email' /></div>
                    <div><input type='tel' placeholder='Telephone' /></div>
                    <div><input type='text' placeholder='Sujet' /></div>
                    <div><textarea placeholder='Message' /></div>
                    <div><button>Envoyer</button></div>
                </form>
            </div>
            <div className='contact-info'>
                <h2>Nos Informations</h2>
                <p><strong>Adresse:</strong> 123 rue des fleurs, Paris, France</p>
                <p><strong>Telephone:</strong>email@gmail.com</p>
                <p><strong>Email:</strong>email@gmail.com</p>
                <p><strong>Localisation:</strong></p>
                <div className='map'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.550839812225!2d-7.389541390143422!3d33.69469273790514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b6f11d7e29a5%3A0x9a3d76b2ba1c3662!2sMohammedia!5e0!3m2!1sen!2sma!4v1717143718485!5m2!1sen!2sma" 
                        style={{border: '0'}}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;