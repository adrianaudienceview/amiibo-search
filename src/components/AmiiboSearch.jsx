import React, { useState } from 'react';
import '../styles/AmiiboCard.css';
import AmiiboList from './AmiiboList';
import { fetchAmiibosByName } from '../services/amiiboService'; 

const AmiiboSearch = () => {
  const [amiiboName, setAmiiboName] = useState('');
  const [amiiboList, setAmiiboList] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const amiibos = await fetchAmiibosByName(amiiboName);
      setAmiiboList(amiibos);
      setError(''); 
    } catch (error) {
      setError('Error fetching amiibo data. Please try again.'); 
      console.error('Error fetching amiibo data:', error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Amiibo Search</h1>
      </div>

      <div className="search-container">
        <input
          type="text"
          value={amiiboName}
          onChange={(e) => setAmiiboName(e.target.value)}
          placeholder="Enter amiibo name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <div className="error-message">{error}</div>} 

      <AmiiboList amiiboList={amiiboList} />
    </div>
  );
};

export default AmiiboSearch;
