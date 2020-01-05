import React from 'react';
import Link from '../presentational/core/Link';

const AUTHORIZE_LINK = 'https://podcastr.eu.auth0.com/authorize';

const buildURLQuery = obj =>
  Object.entries(obj)
    .map(pair => pair.map(encodeURIComponent).join('='))
    .join('&');

export default function Home() {
  const parameters = {
    'response_type': 'token',
    'audience': '1234567890',
    'client_id': 'Nj3tcyeh1tV1I9FHmEK7iEnbJJgbsYCq',
    'redirect_uri': 'http://localhost:3000/callback',
    scope: 'profile email',
  };

  const query = buildURLQuery(parameters);
  const authorizationUri = `${AUTHORIZE_LINK}?${query}`;

  return (
    <>
      <h1>Welcome</h1>
      <p>Login to continue</p>
      <Link href={authorizationUri}>Login</Link>
    </>
  );
}