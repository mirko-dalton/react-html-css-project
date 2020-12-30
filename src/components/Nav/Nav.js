import React from 'react';
import './Nav.css';

function Nav() {

    return (
        <nav>
            <div id='nav-scroll-top' className='container'>
                <a className='nav-firma' href='index.html'>Cryptoproject - Inspierende Innovation</a>
                <div className='nav-link'>
                    <a href='#about'>o nas</a>
                    <a href='#offer'>oferta</a>
                    <a className='nav-contact' href='#contact'>kontakt</a>
                    <a className='button-scroll-top' href='#nav-scroll-top'> </a>
                </div>
            </div>
        </nav>
    );

};

export default Nav;