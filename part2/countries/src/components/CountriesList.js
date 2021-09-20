import React, { useState } from 'react';
import CountryDetails from './CountryDetails';

const CountriesList = ({ countries }) => {
  return countries.map((country) => (
    <Country key={country.name} country={country} />
  ));
};

const Country = ({ country }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('show');
  const handleClick = (e) => {
    if (show) setText('show');
    else setText('hide');
    setShow(!show);
  };
  return (
    <>
      <span>
        <p key={country.numericCode}>{country.name}</p>
        <button onClick={handleClick}>{text}</button>
      </span>
      {show ? <CountryDetails country={country} /> : ''}
    </>
  );
};

export default CountriesList;
