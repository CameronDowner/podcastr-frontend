import React from "react";

import { AppBar, Container, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1
  }
});

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Podcastr
          </Typography>
          <div className={ classes.grow } />
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
      { children }
      </Container>
    </>
  );
}