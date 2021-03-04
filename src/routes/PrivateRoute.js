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
    }, { initialData: { foo: true }, retry: false });
}

function PrivateRoute({ component: Component, ...rest }) {
    const history = useHistory();
    const { isLoading, data } = useAuthentication();
    const { authenticated, isFresh } = data;

    useEffect(() => {
        if (!isFresh && !isLoading && !authenticated) {
            history.push("/");
        }
    }, [isFresh, isLoading, authenticated, history]);

    return <Route component={ Component } { ...rest } />;
}

export default PrivateRoute;
