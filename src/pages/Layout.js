import React from "react";

import { Box, Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Mic } from "@material-ui/icons";

const useStyles = makeStyles({
    grow: {
        flexGrow: 1
    },
    topBarBox: {
        paddingTop: "1rem",
        paddingBottom: "2rem"
    },
    logoutButton: {
        textTransform: "none"
    }
});

export default function Layout({ children }) {
    const classes = useStyles();
    return (
      <>
          <Container>
              <Box className={ classes.topBarBox }>
                  <Grid container alignItems="center">
                      <Grid item>
                          <Mic fontSize="large" />
                      </Grid>
                      <Grid item>
                          <Typography variant="h5" component="h1">Podcastr</Typography>
                      </Grid>
                      <Grid item className={ classes.grow } />
                      <Grid item>
                          <Button size="large" className={ classes.logoutButton } href="/logout">Logout</Button>
                      </Grid>
                  </Grid>
              </Box>
          </Container>
          <Container>
              { children }
          </Container>
      </>
    );
}