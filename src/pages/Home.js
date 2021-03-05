import React from "react";

import { Container, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Image from "material-ui-image";

import LoginWithSpotifyButton from "../components/LoginWithSpotifyButton";

const thumbnails = [
    "https://cdn-images-1.listennotes.com/podcasts/breaking-mum-dad-the-podcast-anna-williamson-mWhp7rxGUqD.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/against-the-odds--4cFnQeC_IP-1nhsbiTGYLN.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/the-knowledge-project-with-shane-parrish-xtNBPdAnCV2-RoXxgNCyDmE.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/the-jab-from-economist-radio-the-economist-TzZ1JbNc3lY-XfEKJie0lI7.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/mommy-doomsday-nbc-news-Wnog7zY8tJk-YjakWAEq5iz.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/call-of-the-wild-wwf-t1DSsKrjk2g-LFH3x7ZUzba.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/the-opportunist-kast-media-IASujbcyN4g-ixaZkJNSeOG.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/the-robbie-fowler-podcast-chris-mchardy-NWFv1k9j_3x-4d6Hly1Mfoz.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/the-history-of-english-podcast-kevin-stroud-E-RQyvBaz_o-f6K-59ld_oO.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/life-interrupted-with-simon-thomas-baqDgF1RrBm--z2oFQGyX4s.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/sideways-wqsEdUWyPGF-vaBjwQ9SHfm.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/grow-cook-eat-arrange-with-sarah-raven-aSGRi97E_3x-KCLhWBqQAfk.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/made-of-stronger-stuff-bbc-radio-4-fWlbsaD8ZTS-5bMH-rgopmv.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/duchess-ung_NqXW96H-E0LxG9FvZ6Y.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/teach-me-a-lesson-with-greg-james-and-bella-MK2z5O8r3tw-863RLcoxHaN.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/mama-still-got-it-louise-boyce-HD3bl7xVCNa-CsIE8HuKoj2.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/the-lincoln-project-the-lincoln-project-5mjqnbr2Vwy--Y3CwQFnMr_.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/as-good-as-it-gets-with-bev-turner-marina-a189o5xQ6pu-Hu-T3_xoDON.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/the-owen-jones-podcast-owen-jones-8T9VUv2dSFn-ZF8zNK3sxDq.300x300.jpg",
    "https://cdn-images-1.listennotes.com/podcasts/joyride-with-jools-holland-and-jim-moir-Lr_CKJkOIfH-cDC_2AyWHox.300x300.jpg"
];

const useStyles = makeStyles({
    centre: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    fullHeight: {
        height: "100vh"
    },
    tenPercentHeight: {
        height: "30vh"
    },
    topTrack: {
        position: "fixed",
        width: "max-content",
        top: "3vh",
        zIndex: -100,
        animation: "$goingRight 70000ms linear"
    },
    "@keyframes goingRight": {
        "0%": { right: "100vw" },
        "100%": { right: "-100%" }
    }
    ,
    bottomTrack: {
        position: "fixed",
        width: "max-content",
        bottom: "15vh",
        zIndex: -100,
        animation: "$goingLeft 120000ms linear"
    },
    "@keyframes goingLeft": {
        "0%": { left: "25%" },
        "100%": { left: "-100%" }
    }
});

function TopThumbnailTrain() {
    const classes = useStyles();
    return (
      <Grid container className={ classes.topTrack } spacing={3}>
          { thumbnails.map(thumbnail => (
            <Grid item>
                <Paper style={ { overflow: "hidden", width: 300, height: 300 } }>
                    <Image
                      imageStyle={ { width: 300, height: 300, opacity: 0.5 } }
                      src={ thumbnail }
                    />
                </Paper>
            </Grid>
          )) }
      </Grid>
    );
}

function BottomThumbnailTrain() {
    const classes = useStyles();
    return (
      <Grid container className={ classes.bottomTrack } spacing={3}>
          { thumbnails.map(thumbnail => (
            <Grid item>
                <Paper style={ { overflow: "hidden", width: 300, height: 300 } }>
                    <Image
                      imageStyle={ { width: 300, height: 300, opacity: 0.5 } }
                      src={ thumbnail }
                    />
                </Paper>
            </Grid>
          )) }
      </Grid>
    );
}

export default function Home() {
    const classes = useStyles();

    return (
      <>
          <TopThumbnailTrain />
          <BottomThumbnailTrain />
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
      </>
    );
}