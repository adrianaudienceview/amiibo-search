export const fetchAmiibosByName = async (amiiboName) => {
    try {
      const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?name=${amiiboName}`);
      const data = await response.json();
      return (data.amiibo || []).map(amiibo => ({
        amiiboSeries: amiibo.amiiboSeries,
        character: amiibo.character,
        name: amiibo.name,
        type: amiibo.type,
        image: amiibo.image,
      }));
    } catch (error) {
      console.error('Error fetching amiibo data:', error);
      throw error;
    }
  };
  