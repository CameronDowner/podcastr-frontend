import React, { useEffect, useMemo, useRef, useState } from "react";

import Layout from "./Layout";
import { Card, CardContent, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FavoriteBorder, Pause, PlayArrow, SkipNext } from "@material-ui/icons";

const useStyles = makeStyles({
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
    }
});

function useRecommendedPodcast() {
    const [loading, setLoading] = useState(false);
    const [podcast, setPodcast] = useState({});


    const loadPodcastRef = useRef(() => {
        setLoading(true);
        fetch("/api/recommend_podcast")
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
            audioRef.current.play()
        }
    }, [audio]);

    const AudioComponent = useMemo(() => () => (
      <audio ref={audioRef} src={`${ audio }#t=${ startTimeSec }`} />
    ), [audio]);

    return {
        play,
        pause,
        isPlaying,
        AudioComponent
    }
}


export default function Genres() {
    const classes = useStyles();
    const { podcast, loading, loadPodcast } = useRecommendedPodcast();

    const { audio, previewStartingTimeSec } = (podcast.previewEpisode || {})

    const { AudioComponent, play, pause, isPlaying } = useAudio(audio, previewStartingTimeSec);

    useEffect(() => loadPodcast(), []);

    function handleNextButtonClick() {
        loadPodcast();
    }

    return (
      <Layout>
          <AudioComponent />
          <Grid container spacing={ 4 }>
              <Grid item xs={ 12 }>
                  <Grid container spacing={ 4 } wrap="nowrap">
                      <Grid item>
                          <Paper style={ { width: "fit-content", height: "300px", overflow: "hidden" } }>
                              <img
                                src={ podcast.thumbnail } />
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
                                      { !isPlaying && <PlayArrow onClick={() => play()}/> }
                                      { isPlaying && <Pause onClick={() => pause()}/> }
                                  </IconButton>
                              </Grid>
                              <Grid item>
                                  <IconButton className={ classes.largeIcon } onClick={handleNextButtonClick}>
                                      <SkipNext />
                                  </IconButton>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={ 12 }>
                  <Card variant="outlined">
                      <CardContent>
                          <Typography variant="h6">{ podcast.title }</Typography>
                          <Typography variant="body1">
                              { podcast.description }
                          </Typography>
                      </CardContent>
                  </Card>
              </Grid>
          </Grid>
      </Layout>
    );
}