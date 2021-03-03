import React from "react";

import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

import LoginWithSpotifyButton from "../components/LoginWithSpotifyButton";

const useStyles = makeStyles({
    centre: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    fullHeight: {
        height: "100vh"
    },
    tenPercentHeight: {
        height: "40vh"
    }
});

export default function Home() {
    const classes = useStyles();

    return (
      <Container>
          <Grid container direction="column" alignItems="center" justify="center" alignContent="center"
                className={ classes.fullHeight } spacing={ 1 }>
              <Grid item>
                  <Typography variant="h4">
                      Podcastr
                  </Typography>
              </Grid>
              <Grid item>
                  <Typography>
                      Find your perfect podcast.
                  </Typography>
              </Grid>
              <Grid item>
                  <LoginWithSpotifyButton />
              </Grid>
              <div className={ classes.tenPercentHeight } />
          </Grid>
      </Container>
    );
}