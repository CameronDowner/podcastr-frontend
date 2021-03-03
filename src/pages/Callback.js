import React, { useEffect } from "react";
import _ from "lodash";
import { updateCredentials } from "../store/actions/authentication";
import moment from "moment";
import useLocationHash from "../hooks/useLocationHash";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { CircularProgress, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

function toCamelCase(obj) {
    return _.mapKeys(obj, (v, k) => _.camelCase(k));
}

function useSpotifyProfile() {
    const authentication = useSelector(state => state.authentication);

    const { accessToken } = authentication;
    const { data, isLoading } = useQuery(["fetchSpotifyProfile", accessToken], () => {
        if (!accessToken) {
            return
        }
        return fetch("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${ accessToken }`
            }
        }).then(res => res.json());
    });

    return { profile: data, isLoading };
}

const useStyles = makeStyles({
    spinnerWrapper: {
        textAlign: "center",
        marginTop: "20vh"
    }
});

function Callback() {
    const dispatch = useDispatch();
    const [hashParameters] = useLocationHash();
    const classes = useStyles();
    const history = useHistory()

    const { profile, isLoading } = useSpotifyProfile();

    useEffect(() => {
        const { accessToken, expiresIn } = toCamelCase(hashParameters);

        if (accessToken && expiresIn) {
            const expiry = moment()
              .add(expiresIn, "seconds")
              .format();

            const credentials = { accessToken, expiry };
            dispatch(updateCredentials(credentials));
        }
    }, [dispatch, hashParameters]);

    useEffect(() => {
        if (profile && profile.display_name) {
            history.push("/genres")
        }
    }, [profile])

    return (
      <Container>
          <div className={ classes.spinnerWrapper }>
              <CircularProgress size="4rem" />
              <Typography>Loading...</Typography>
          </div>
      </Container>
    );
}

export default Callback;