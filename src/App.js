import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Callback from './pages/Callback';
import { PrivateRoute, PublicRoute } from './routes';
import Genres from './pages/Genres';

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/callback" exact component={Callback} />
        <PrivateRoute path="/genres" exact component={Genres} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
