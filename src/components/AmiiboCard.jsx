import React from 'react';
import '../styles/AmiiboCard.css';
import AmiiboInfo from './AmiiboInfo';
import AmiiboImage from './AmiiboImage';

const AmiiboCard = ({ amiibo }) => {
  return (
    <li className="amiibo-card">
      <AmiiboInfo 
        name={amiibo.name} 
        character={amiibo.character} 
        amiiboSeries={amiibo.amiiboSeries} 
        type={amiibo.type} 
      />
      <AmiiboImage src={amiibo.image} alt={amiibo.name} />
    </li>
  );
};

export default AmiiboCard;
