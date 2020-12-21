import React from 'react';
import './App.css';

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Callback from './pages/Callback';
import Genres from './pages/Genres';
import { PrivateRoute, PublicRoute } from './routes';

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <Route path="/callback" exact component={Callback} />
        <PrivateRoute path="/genres" exact component={Genres} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
