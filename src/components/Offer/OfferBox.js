import React from 'react';
import './OfferBox.css';

const OfferBox = ({ offerName, isNew }) => {

  let addInfo;
  let addPoint;

  if (isNew) {
    addInfo = '(Nowość)';
    addPoint = (<div className='offer-specialist-point'></div>);
  };

  return (
    <div className='offer-specialist'>
      <div>{addPoint}</div>
      <h2>{offerName}</h2>
      <p>{addInfo}</p>
    </div>
  );

};

export default OfferBox;