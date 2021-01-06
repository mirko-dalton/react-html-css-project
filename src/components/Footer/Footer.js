import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer>
            <div className='container'>
                <div className='footer-left'>
                    <p>Cryptoproject - wszelkie prawa zastrzeżone, 2020</p>
                </div>
                <div className='footer-right'>
                    <a className='fab fa-instagram' href='https://instagram.com'> </a>
                    <a className='fab fa-facebook-square' href='https://facebook.com'> </a>
                </div>
            </div>
        </footer>
    );

};

export default Footer;