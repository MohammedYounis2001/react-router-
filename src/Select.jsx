import React, { useState } from 'react';
import CountrySelector from './CountrySelector';
import Cities from './Cities';

function Sel() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Country and Cities App</h1>
      <CountrySelector onCountryChange={handleCountryChange} />
      {selectedCountry && <Cities country={selectedCountry} />}
    </div>
  );
}

export default Sel;
