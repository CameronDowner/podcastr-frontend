import React from "react";

import { Container, makeStyles, Paper, Typography } from "@material-ui/core";

import LoginWithSpotifyButton from "../components/LoginWithSpotifyButton";

const useStyles = makeStyles({
  loginCard: {
    width: "100%",
    maxWidth: "550px",
    margin: "15vh auto",
    padding: "0.5rem 1rem",
    textAlign: "center"
  },
  centered: {
    padding: "1rem"
  },
  container: {
    position: "fixed",
    backgroundColor: "#AA9CAA",
    width: "100vw",
    height: "100vh"
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={ classes.container }>
      <Container>
        <Paper className={ classes.loginCard }>
          <Typography variant="h4">
            Welcome to Podcastr
          </Typography>
          <Typography>
            Some introduction text here.
          </Typography>
          <div className={ classes.centered }>
            <LoginWithSpotifyButton />
          </div>
        </Paper>
      </Container>
    </div>
  );
}