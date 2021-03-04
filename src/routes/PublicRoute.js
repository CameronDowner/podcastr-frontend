import React, { useEffect } from "react";

import { Route } from "react-router-dom";

import { useQuery } from "react-query";
import { useHistory } from "react-router";

function useAuthentication() {
    return useQuery("authentication", () => {
        return fetch("/api/me").then(res => {
            if (res.ok) {
                return { authenticated: true };
            } else {
                return { authenticated: false };
            }
        });
    }, { initialData: { isFresh: true }, retry: false });
}

function PublicRoute({ component, ...rest }) {
    const history = useHistory();
    const { isLoading, data } = useAuthentication();
    const { authenticated, isFresh } = data;

    useEffect(() => {
        if (!isFresh && !isLoading && authenticated) {
            history.push("/home");
        }
    }, [isFresh, isLoading, authenticated, history]);

    return <Route component={ component } { ...rest } />;
}

export default PublicRoute;
