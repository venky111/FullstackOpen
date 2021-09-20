import WeatherDetails from './WeatherDetails';

const CountryDetails = ({ country }) => {
  const { name, population, capital, languages, flag } = country;
  return (
    <>
      <h2>{name}</h2>
      <p>{`capital ${capital}`}</p>
      <p>{`population ${population}`}</p>
      <h3>
        <p>languages</p>
      </h3>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={flag} width="300px" height="300px" alt="country flag" />
      <WeatherDetails country={name} />
    </>
  );
};

export default CountryDetails;
