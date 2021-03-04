import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";

import Image from "./SpotifyIconWhite.png";

const useStyles = makeStyles({
    loginWithSpotifyButton: {
        backgroundColor: "rgb(30,215,96)",
        textTransform: "none"
    }
});

function SpotifyIcon() {
    return (
      <img src={ Image } width="24" height="24" alt="The spotify logo" />
    );
}


export default function LoginWithSpotifyButton() {
    const classes = useStyles();

    return (
      <Button className={ classes.loginWithSpotifyButton } color="primary" size="large" variant="contained"
              href={ "/oauth2/authorization/spotify" }
              disableElevation startIcon={ <SpotifyIcon /> }>
          Log in with Spotify
      </Button>
    );
}