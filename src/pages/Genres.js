import React from "react";

import Layout from "./Layout";
import { Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PlayArrow } from "@material-ui/icons";

const useStyles = makeStyles({
    contentCard: {
        // backgroundColor: "transparent"
        maxWidth: "400px",
        width: "400px"
    }
});


export default function Genres() {
    const classes = useStyles();

    return (
      <Layout>
          <Grid container spacing={ 4 } justify="center">
              <Grid item className={ classes.contentCard }>
                  <Card variant="outlined" square className={ classes.contentCard }>
                      <CardMedia
                        component="img"
                        height="400"
                        image="https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-AzKVtPeMOL4-53MLh7NpAwm.300x300.jpg"
                      />
                      <CardContent>
                          <Typography variant="h6">My Star Wars Story</Typography>
                          <Typography variant="body1">
                              My Star Wars Story is a project to document the impact of Star Wars on the lives of those
                              in the Star Wars Generation. We're looking to tell as many people's stories as possible.
                              If you'd like to tell your Star Wars Story, please send an email to
                              story@mystarwarsstory.com
                          </Typography>
                          <PlayArrow fontSize="large" />
                      </CardContent>
                  </Card>
              </Grid>
          </Grid>
      </Layout>
    );
}