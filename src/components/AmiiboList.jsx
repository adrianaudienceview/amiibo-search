import React from 'react';
import AmiiboCard from './AmiiboCard';

const AmiiboList = ({ amiiboList }) => {
  return (
    <ul>
      {amiiboList.map((amiibo, index) => (
        <AmiiboCard key={`${amiibo.head}-${amiibo.tail}`} amiibo={amiibo} />
      ))}
    </ul>
  );
};

export default AmiiboList;
