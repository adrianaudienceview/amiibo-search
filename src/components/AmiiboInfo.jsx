import React from 'react';
import AmiiboDetail from './AmiiboDetail';

const AmiiboInfo = ({ name, character, amiiboSeries, type }) => {
  return (
    <div className="amiibo-info">
      <AmiiboDetail label="Name" value={name} />
      <AmiiboDetail label="Character" value={character} />
      <AmiiboDetail label="Series" value={amiiboSeries} />
      <AmiiboDetail label="Type" value={type} />
    </div>
  );
};

export default AmiiboInfo;
