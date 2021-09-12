import React from 'react';
import * as Fi from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { AboutCountryWrapper, BackLink } from './AboutCountry.style';

const AboutCountry = ({ countries }) => {
  let { name } = useParams();
  const countryFiltered = countries.filter((country) => country.name === name);
  console.log(countryFiltered);

  return (
    <AboutCountryWrapper>
      <div>
        <BackLink to='/'>
          <Fi.FiArrowLeft /> Back
        </BackLink>
      </div>

      {countryFiltered &&
        countryFiltered.map((country) => (
          <div key={country.name}>
            <div className='image'>
              <img src={country.flag} alt='' />
            </div>

            <div>
              <div>
                <h3>{country.name}</h3>
                <div>
                  <div>
                    <p>
                      Native name: <span>{country.nativeName}</span>
                    </p>
                    <p>
                      Population: <span>{country.population}</span>
                    </p>
                    <p>
                      Region: <span>{country.region}</span>
                    </p>
                    <p>
                      Subregion: <span>{country.subregion}</span>
                    </p>
                    <p>
                      Capital: <span>{country.capital}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Top Level Domain: <span>{country.topLevelDomain}</span>
                    </p>
                    <p>
                      Currencies:{' '}
                      {country.currencies.map(({ name }) => (
                        <span key={name}>{name}</span>
                      ))}
                    </p>
                    <p>
                      Languages:{' '}
                      <span>
                        {country.languages.map(({ name }) => name + ', ')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4>Border Countries:</h4>
                {country.borders.map((border) => (
                  <p key={border}>{border}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
    </AboutCountryWrapper>
  );
};

export default AboutCountry;
