import React from "react";
import countriesData from './Countrydata';

function Home({ selectedCountry, setSelectedCountry }) {
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
    };
  
    return (
      <div className="home">
        <div className="country-selector">
          <h2>Select a Country:</h2>
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">-- Select a Country --</option>
            {countriesData.map((country, index) => (
              <option key={index} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  
  export default Home;