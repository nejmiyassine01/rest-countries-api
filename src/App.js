import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header.componet';
import Home from './pages/Home/Home.component';
import Countries from './pages/Countries/Countries.component';

import { lightTheme, darkTheme, GlobalStyle } from './styles/globalStyle';
import { useDarkMode } from './styles/useDarkMode.js';

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyle />
        <Header theme={theme} themeToggler={themeToggler} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/country/:id' component={Countries} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
