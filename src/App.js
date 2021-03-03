import React from "react";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Callback from "./pages/Callback";
import Genres from "./pages/Genres";
import { PrivateRoute, PublicRoute } from "./routes";
import { CssBaseline } from "@material-ui/core";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
      <>
          <CssBaseline />
          <QueryClientProvider client={ queryClient }>
              <Router>
                  <Switch>
                      <PublicRoute path="/" exact component={ Home } />
                      <Route path="/callback" exact component={ Callback } />
                      <PrivateRoute path="/home" exact component={ Genres } />
                      <Redirect to="/" />
                  </Switch>
              </Router>
          </QueryClientProvider>
      </>
    );
}

export default App;
