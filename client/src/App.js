import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Recipe from './pages/Recipe';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CheckRecipe from './pages/CheckRecipe';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/inventory" exact component={Inventory}></Route>
          <Route path="/recipe" exact component={Recipe}></Route>
          <Route path="/check/:id" exact component={CheckRecipe}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
