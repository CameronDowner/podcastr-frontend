import React from "react";

import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Logout from "./pages/Logout";
import { PrivateRoute, PublicRoute } from "./routes";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { QueryClient, QueryClientProvider } from "react-query";


import { createMuiTheme } from '@material-ui/core/styles';

const queryClient = new QueryClient();


const theme = createMuiTheme({
    palette: {
        background: {
            default: "#FFFFFF"
        },
    },
});

function App() {
    return (
      <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={ queryClient }>
              <Router>
                  <Switch>
                      <PublicRoute path="/" exact component={ Home } />
                      <PrivateRoute path="/home" exact component={ Genres } />
                      <PrivateRoute path="/logout" exact component={ Logout } />
                      <Redirect to="/" />
                  </Switch>
              </Router>
          </QueryClientProvider>
      </MuiThemeProvider>
    );
}

export default App;
