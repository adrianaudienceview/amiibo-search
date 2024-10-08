import React from 'react';

const AmiiboDetail = ({ label, value }) => {
  return (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  );
};

export default AmiiboDetail;
