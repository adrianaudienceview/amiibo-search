import React from 'react';
import AmiiboCard from './AmiiboCard';

const AmiiboList = ({ amiiboList }) => {
  return (
    <ul>
      {amiiboList.map((amiibo, index) => (
        <AmiiboCard key={index} amiibo={amiibo} />
      ))}
    </ul>
  );
};

export default AmiiboList;
