import React from 'react';
import {
  CountryCardContainer,
  CountryCardContent,
  CountryCardImage,
  CountryCardWrapper,
} from './CountryCard.style';

const CountryCard = ({ countries }) => {
  console.log(countries);
  return (
    <CountryCardWrapper>
      {countries.length &&
        countries.map((country) => (
          <CountryCardContainer
            to={`/country/${country.name}`}
            key={country.name}
          >
            <CountryCardImage>
              <img src={country.flag} alt={country.name} />
            </CountryCardImage>
            <CountryCardContent>
              <h3>{country.name}</h3>
              <p>
                <strong>Population:</strong> {country.population}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
            </CountryCardContent>
          </CountryCardContainer>
        ))}
    </CountryCardWrapper>
  );
};

export default CountryCard;
