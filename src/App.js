import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

import Header from './components/Header/Header.componet';
import Home from './pages/Home/Home.component';
import Countries from './pages/Countries/Countries.component';

import { lightTheme, darkTheme, GlobalStyle } from './styles/globalStyle';
import { useDarkMode } from './styles/useDarkMode.js';
import { useEffect, useState } from 'react';

const App = () => {
  // Theme Toggle Dark / Light Mode
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // Data Countries
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filterParam, setFilterParam] = useState(['All']);
  const [searchParam] = useState(['capital', 'name']);

  const url = 'https://restcountries.eu/rest/v2/';

  const handleChange = (e) => setSearch(e.target.value);

  const handleSelectChange = (e) => setFilterParam(e.target.value);

  const getAllCountries = async () => {
    try {
      const response = await axios.get(`${url}all`);
      const allCountries = response.data;
      setCountries(allCountries);
    } catch (error) {
      console.error(`Error: ${error} `);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const searchCountry = (countries) => {
    // eslint-disable-next-line array-callback-return
    return countries.filter((country) => {
      if (country.region === filterParam) {
        return searchParam.some((newCountry) => {
          return (
            country[newCountry]
              .toString()
              .toLowerCase()
              .indexOf(search.toLowerCase()) > -1
          );
        });
      } else if (filterParam === 'All') {
        return searchParam.some((newCountry) => {
          return (
            country[newCountry]
              .toString()
              .toLowerCase()
              .indexOf(search.toLowerCase()) > -1
          );
        });
      }
    });
  };

  // console.log(searchCountry(countries));

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyle />
        <Header theme={theme} themeToggler={themeToggler} />
        <Switch>
          <Route exact path='/'>
            <Home
              search={search}
              handleChange={handleChange}
              searchCountry={searchCountry}
              handleSelectChange={handleSelectChange}
              countries={countries}
            />
          </Route>
          <Route exact path='/country/:name'>
            <Countries countries={countries} />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
