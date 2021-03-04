import React, { useEffect } from "react";
import { CircularProgress, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    spinnerWrapper: {
        textAlign: "center",
        marginTop: "20vh"
    }
});

function Logout() {
    const classes = useStyles();

    useEffect(() => {
        fetch("/api/logout");
    }, [])

    return (
      <Container>
          <div className={ classes.spinnerWrapper }>
              <CircularProgress size="4rem" />
              <Typography>Logging out...</Typography>
          </div>
      </Container>
    );
}

export default Logout;