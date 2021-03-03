import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import Layout from "./Layout";
import { Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";

function PodcastShowCard({ name, images, description, publisher, total_episodes }) {
  return (
    <Card style={ { maxWidth: 400, width: 400, height: "100%" } }>
      <CardMedia
        image={ images[1].url }
        style={ { height: 400 } }
        title={ name + " Cover Artwork" } />
      <CardContent>
        <Typography variant="h6">
          { name }
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          { publisher } • { total_episodes } Episodes
        </Typography>
      </CardContent>
    </Card>
  );
}

function PodcastShowList({ podcasts = [] }) {
  return (
    <Grid container spacing={ 1 } justify="center">
      {
        podcasts.map(podcast => (
          <Grid item>
            <PodcastShowCard { ...podcast } />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default function Genres() {
  const authentication = useSelector(state => state.authentication);

  const [playlists, setPlaylists] = useState({ items: [] });

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/shows", {
      headers: {
        Authorization: `Bearer ${ authentication.accessToken }`
      }
    }).then(res => res.json()).then(setPlaylists);
  }, [authentication]);

  return (
    <Layout>
      <Typography variant="h2">Your Podcasts</Typography>
      <PodcastShowList podcasts={ (playlists.items || []).map(item => item.show) } />
    </Layout>
  );
}