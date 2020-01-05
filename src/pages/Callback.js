import React, { useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { updateCredentials } from '../store/actions/authentication';
import moment from 'moment';
import useLocationHash from '../hooks/useLocationHash';
import { connect } from 'react-redux';

function toCamelCase(obj) {
  return _.mapKeys(obj, (v, k) => _.camelCase(k));
}

function Callback({ dispatch }) {
  const [hashParameters] = useLocationHash();

  useEffect(() => {
    const { accessToken, expiresIn } = toCamelCase(hashParameters);

    if (accessToken && expiresIn) {
      const expiry = moment()
        .add(expiresIn, 'seconds')
        .format();

      const credentials = { accessToken, expiry };
      dispatch(updateCredentials(credentials));
    }
  }, [dispatch, hashParameters]);

  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default connect()(Callback);