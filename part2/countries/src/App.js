import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (searchText)
      axios
        .get(`https://restcountries.eu/rest/v2/name/${searchText}`)
        .then((response) => {
          const result = response.data;
          setCountries(result);
        })
        .catch((err) => {
          console.log('No matches found');
          setCountries([]);
        });
    else setCountries([]);
  }, [searchText]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <input type="text" value={searchText} onChange={handleChange} />
      {countries.length < 1 ? (
        <p>Found zero matches. Try with different text!!</p>
      ) : countries.length === 1 ? (
        <CountryDetails country={countries[0]} />
      ) : countries.length <= 10 ? (
        <CountriesList countries={countries} />
      ) : (
        <p>Too many matches,specify another filter</p>
      )}
    </>
  );
};

export default App;
