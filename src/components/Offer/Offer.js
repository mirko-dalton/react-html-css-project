import React from 'react';
import './Offer.css';
import OfferBox from './OfferBox';

const offers = [

    {
        id: 1,
        offerName: 'tworzenie oprogramowania',
        isNew: true,
    },
    {
        id: 2,
        offerName: 'aplikacje webowe',
        isNew: false,
    },
    {
        id: 3,
        offerName: 'portale internetowe',
        isNew: false,
    },
    {
        id: 4,
        offerName: 'strony WWW',
        isNew: false,
    },
    {
        id: 5,
        offerName: 'urządzenia mobilne',
        isNew: true,
    },
    {
        id: 6,
        offerName: 'analiza i projektowanie systemów',
        isNew: false,
    },

]

function Offer() {

    return (
        <section className='offer' id='offer'>
            <div className='container'>
                <h1>Czym zajmuje się nasza firma?</h1>
                <div className='offer-wrapper'>
                    {
                        offers.map(offer => {
                            return (
                                < OfferBox
                                    key={offer.id}
                                    offerName={offer.offerName}
                                    isNew={offer.isNew} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );

};

export default Offer;