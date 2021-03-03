import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";

import Image from "./SpotifyIconWhite.png";


const AUTHORIZE_LINK = "https://accounts.spotify.com/authorize";

const buildURLQuery = obj =>
  Object.entries(obj)
    .map(pair => pair.map(encodeURIComponent).join("="))
    .join("&");


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
    const parameters = {
        "response_type": "token",
        "client_id": "e1df52fc83c942baa82f5be620f6426f",
        "redirect_uri": "http://localhost:3000/callback",
        scope: "user-read-email user-library-read playlist-read-private"
    };

    const classes = useStyles();

    const query = buildURLQuery(parameters);
    const authorizationUri = `${ AUTHORIZE_LINK }?${ query }`;
    return (
      <Button className={ classes.loginWithSpotifyButton } color="primary" size="large" variant="contained"
              href={ authorizationUri }
              disableElevation startIcon={ <SpotifyIcon /> }>
          Login with Spotify
      </Button>
    );
}