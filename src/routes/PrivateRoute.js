import React from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ authentication, component: Component, ...rest }) {
  const { expiry } = authentication;
  const isActive = moment(expiry).isAfter(moment());

  const redirectToLogin = () => <Redirect to="/" />;
  const componentToRender = isActive ? Component : redirectToLogin;

  return <Route component={componentToRender} {...rest} />;
}

const mapStateToProps = ({ authentication }) => ({ authentication });
export default connect(mapStateToProps)(PrivateRoute);
