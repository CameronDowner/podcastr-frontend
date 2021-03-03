import React from "react";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";

import moment from "moment";

function PublicRoute({ authentication, component, ...rest }) {
  const { expiry } = authentication;
  const isActive = moment(expiry).isAfter(moment());

  const redirectToDashboard = () => <Redirect to="/home" />;
  const componentToRender = isActive ? redirectToDashboard : component;

  return <Route component={componentToRender} {...rest} />;
}

const mapStateToProps = ({ authentication }) => ({ authentication });
export default connect(mapStateToProps)(PublicRoute);
