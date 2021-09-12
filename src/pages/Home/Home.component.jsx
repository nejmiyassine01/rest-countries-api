import React from 'react';
import CountryCard from '../../components/Country/CountryCard.component';
import SearchForm from '../../components/SearchForm/SearchForm.component';

const Home = ({
  countries,
  isLoading,
  search,
  searchCountry,
  handleChange,
  handleSelectChange,
}) => {
  return (
    <div>
      <SearchForm
        search={search}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
      />
      <CountryCard
        search={search}
        searchCountry={searchCountry}
        countries={countries}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Home;
