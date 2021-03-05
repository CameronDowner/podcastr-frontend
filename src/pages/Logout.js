import React, { useEffect } from "react";
import { CircularProgress, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles({
    spinnerWrapper: {
        textAlign: "center",
        marginTop: "20vh"
    }
});

function Logout() {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        fetch("/api/logout")
          .then(() => {
              history.push("/");
          });
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