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
  const url = 'https://restcountries.eu/rest/v2/';

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

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyle />
        <Header theme={theme} themeToggler={themeToggler} />
        <Switch>
          <Route exact path='/'>
            <Home countries={countries} />
          </Route>
          <Route exact path='/country/:id' component={Countries} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
