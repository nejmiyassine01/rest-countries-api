import React from 'react';
import AboutCountry from '../../components/AboutCountry/AboutCountry.component';

const Country = ({ countries }) => {
  return (
    <div>
      <AboutCountry countries={countries} />
    </div>
  );
};

export default Country;
