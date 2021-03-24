import logo from './logo.svg';
import './App.css';
import Inventory from './pages/Inventory';
import Recipe from './pages/Recipe';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect from="/" to="/inventory" exact></Redirect>
          <Route path="/inventory" exact component={Inventory}></Route>
          <Route path="/recipe" exact component={Recipe}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
