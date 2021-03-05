import React, { useEffect, useMemo, useRef, useState } from "react";

import Layout from "./Layout";
import { Backdrop, Card, CardContent, CircularProgress, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FavoriteBorder, Pause, PlayArrow, SkipNext } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    contentCard: {
        // backgroundColor: "transparent"
        maxWidth: "400px",
        width: "400px"
    },
    baseButton: {
        textTransform: "none",
        fontSize: "1.15rem",
        color: "rgba(0, 0, 0, 0.87)"
    },
    largeIcon: {
        "& svg": {
            fontSize: 64
        }
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff"
    },
    center: {
        textAlign: "center"
    }
}));

function useRecommendedPodcast() {
    const [loading, setLoading] = useState(false);
    const [podcast, setPodcast] = useState({});


    const loadPodcastRef = useRef(() => {
        setLoading(true);
        return fetch("/api/recommend_podcast")
          .then(res => res.json())
          .then(setPodcast)
          .finally(() => setLoading(false));
    });

    return { podcast, loading, loadPodcast: loadPodcastRef.current };
}

function useAudio(audio, startTimeSec = 0) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function play() {
        setIsPlaying(true);
        audioRef.current.play();
    }

    function pause() {
        setIsPlaying(false);
        audioRef.current.pause();
    }

    function currentTime() {
        return audioRef.current.currentTime;
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [audio]);

    const AudioComponent = useMemo(() => () => (
      <audio ref={ audioRef } src={ `${ audio }#t=${ startTimeSec }` } />
    ), [audio]);

    return {
        play,
        pause,
        isPlaying,
        AudioComponent
    };
}


export default function Genres() {
    const classes = useStyles();
    const { podcast, loading, loadPodcast } = useRecommendedPodcast();
    const [isInitialLoad, setInitialLoad] = useState(true);

    const { audio, previewStartingTimeSec } = (podcast.previewEpisode || {});

    const { AudioComponent, play, pause, isPlaying } = useAudio(audio, previewStartingTimeSec);

    useEffect(() => loadPodcast().then(() => setInitialLoad(false)), []);

    function handleNextButtonClick() {
        loadPodcast();
    }

    return (
      <Layout>
          <Backdrop open={ isInitialLoad } className={ classes.backdrop }>
              <Grid container direction="column" alignContent="center">
                  <Grid item className={ classes.center }>
                      <CircularProgress color="inherit" />
                  </Grid>
                  <Grid item>
                      <Typography color="inherit">
                          We're finding podcasts based on your Spotify
                      </Typography>
                  </Grid>
              </Grid>
          </Backdrop>
          <AudioComponent />
          <Grid container spacing={ 4 }>
              <Grid item xs={ 12 }>
                  <Grid container spacing={ 4 } wrap="nowrap">
                      <Grid item>
                          <Paper
                            style={ { width: "fit-content", height: "300px", minWidth: "300px", overflow: "hidden", textAlign: "center" } }>
                              { !loading && <img src={ podcast.thumbnail } /> }
                              { !isInitialLoad && loading && <CircularProgress /> }
                          </Paper>
                      </Grid>
                      <Grid item style={ { flexGrow: 1, alignSelf: "stretch" } }>
                          <Grid container style={ { height: "100%" } } justify="center" alignContent="center">
                              <Grid item>
                                  <IconButton className={ classes.largeIcon }>
                                      <FavoriteBorder />
                                  </IconButton>
                              </Grid>
                              <Grid item>
                                  <IconButton className={ classes.largeIcon }>
                                      { !isPlaying && <PlayArrow onClick={ () => play() } /> }
                                      { isPlaying && <Pause onClick={ () => pause() } /> }
                                  </IconButton>
                              </Grid>
                              <Grid item>
                                  <IconButton className={ classes.largeIcon } onClick={ handleNextButtonClick }>
                                      <SkipNext />
                                  </IconButton>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={ 12 }>
                  <Card variant="outlined">
                      { !isInitialLoad && loading && (
                        <CardContent>
                            <CircularProgress />
                        </CardContent>
                      ) }
                      { !loading && (
                        <CardContent>
                            <Typography variant="h6">{ podcast.title }</Typography>
                            <Typography variant="body1">
                                { podcast.description }
                            </Typography>
                        </CardContent>
                      ) }
                  </Card>
              </Grid>
          </Grid>
      </Layout>
    );
}