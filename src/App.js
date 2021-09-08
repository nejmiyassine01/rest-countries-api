import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home.component';
import Countries from './pages/Countries/Countries.component';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/country/:id' component={Countries} />
      </Switch>
    </div>
  );
};

export default App;
