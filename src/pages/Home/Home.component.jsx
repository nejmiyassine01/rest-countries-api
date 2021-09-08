import React from 'react';
import CountryCard from '../../components/Country/CountryCard.component';
import SearchForm from '../../components/SearchForm/SearchForm.component';

const Home = ({ countries, isLoading }) => {
  return (
    <div>
      <SearchForm />
      <CountryCard countries={countries} isLoading={isLoading} />
    </div>
  );
};

export default Home;
