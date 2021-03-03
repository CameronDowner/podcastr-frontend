import React from "react";

import { Box, Button, Container, Divider, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    grow: {
        flexGrow: 1
    },
    topBarBox: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
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
                          <Typography variant="h4" component="h1">Podcastr</Typography>
                      </Grid>
                      <Grid item className={ classes.grow } />
                      <Grid item>
                          <Button size="large" className={classes.logoutButton} href="/logout">Logout</Button>
                      </Grid>
                  </Grid>
              </Box>
          </Container>
          <Divider />
          <Container>
              { children }
          </Container>
      </>
    );
}