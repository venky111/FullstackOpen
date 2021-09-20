import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDetails = ({ country }) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country}`
      )
      .then((response) => {
        const result = response.data;
        console.log('from here', result);
        setDetails(result);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [country]);
  const { location, current } = details;
  const name = location ? location.name : country;
  const temperature = current?.temperature;
  const weatherIcon = current?.weather_icons[0];
  const windSpeed = current?.wind_speed;
  const windDir = current?.wind_dir;

  return (
    <>
      <h2>Weather in {name}</h2>
      <p>temperatue: {temperature} Celcius</p>
      <img src={weatherIcon} alt="Weather Icon" />
      <p>
        <b>wind:</b> {windSpeed} mph direction {windDir}
      </p>
    </>
  );
};

export default WeatherDetails;
