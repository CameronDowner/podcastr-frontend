import React from "react";
import { Button } from "@material-ui/core";

const AUTHORIZE_LINK = "https://accounts.spotify.com/authorize";

const buildURLQuery = obj =>
  Object.entries(obj)
    .map(pair => pair.map(encodeURIComponent).join("="))
    .join("&");

export default function LoginWithSpotifyButton() {
  const parameters = {
    "response_type": "token",
    "client_id": "e1df52fc83c942baa82f5be620f6426f",
    "redirect_uri": "http://localhost:3000/callback",
    scope: "user-read-email user-library-read playlist-read-private"
  };

  const query = buildURLQuery(parameters);
  const authorizationUri = `${ AUTHORIZE_LINK }?${ query }`;
  return (
    <Button color="primary" variant="contained" href={ authorizationUri }>
      Login with Spotify
    </Button>);
}