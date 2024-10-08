import React, { useState } from 'react';
import './App.css';

const AmiiboSearch = () => {
  const [amiiboName, setAmiiboName] = useState('');
  const [amiiboList, setAmiiboList] = useState([]);

  const fetchAmiibos = async () => {
    try {
      const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?name=${amiiboName}`);
      const data = await response.json();
      const transformedAmiibos = (data.amiibo || []).map(amiibo => ({
        amiiboSeries: amiibo.amiiboSeries,
        character: amiibo.character,
        name: amiibo.name,
        type: amiibo.type,
        image: amiibo.image,
      }));
  
      setAmiiboList(transformedAmiibos);
    } catch (error) {
      console.error('Error fetching amiibo data:', error);
    }
  };  

  const handleSearch = () => {
    fetchAmiibos();
  };

  return (
    <div className="container">
      <h1>Amiibo Search</h1>

      <div className="search-container">
        <input
          type="text"
          value={amiiboName}
          onChange={(e) => setAmiiboName(e.target.value)}
          placeholder="Enter amiibo name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {amiiboList.map((amiibo, index) => (
          <li key={index} className="amiibo-card">
            <div className="amiibo-info">
              <p><strong>Name:</strong> {amiibo.name}</p>
              <p><strong>Character:</strong> {amiibo.character}</p>
              <p><strong>Series:</strong> {amiibo.amiiboSeries}</p>
              <p><strong>Type:</strong> {amiibo.type}</p>
            </div>
              <img className="amiibo-image" src={amiibo.image} alt={amiibo.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmiiboSearch;
