import React from 'react';
import './About.css';

const About = () => {

    return (
        <section className='about' id='about'>
            <div className='container'>
                <h1>Nasi specjalisci</h1>
                <div className='about-employe'>
                    <div className='about-employe-pic-one'></div>
                    <div className='about-employe-desc'>
                        <h2>Imię Nazwisko [ dział ]</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.</p>
                    </div>
                </div>
                <div className='about-employe'>
                    <div className='about-employe-pic-two'></div>
                    <div className='about-employe-desc'>
                        <h2>Imię Nazwisko [ dział ]</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.</p>
                    </div>
                </div>
            </div>
        </section >
    );

};

export default About;