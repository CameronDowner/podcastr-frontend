import React, { useEffect } from "react";
import { updateCredentials } from "../store/actions/authentication";
import { useDispatch } from "react-redux";
import { CircularProgress, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    spinnerWrapper: {
        textAlign: "center",
        marginTop: "20vh"
    }
});

function Logout() {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(updateCredentials({}));
    }, [dispatch]);

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