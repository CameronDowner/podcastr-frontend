import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import Layout from "./Layout";

function PodcastShowCard({ name, images }) {
  return (
    <div>
      <p>{ name }</p>
      <img src={ images[1].url } />
    </div>
  );
}

function PodcastShowList({ podcasts = [] }) {
  return podcasts.map(podcast => <PodcastShowCard { ...podcast } />);
}

export default function Genres() {
  const authentication = useSelector(state => state.authentication);

  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${ authentication.accessToken }`
      }
    }).then(res => res.json()).then(setProfile);
  }, [authentication]);

  const [playlists, setPlaylists] = useState({ items: [] });

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/shows", {
      headers: {
        Authorization: `Bearer ${ authentication.accessToken }`
      }
    }).then(res => res.json()).then(setPlaylists);
  }, [authentication]);

  return (
    <Layout>
      <h1>Genres</h1>
      <p>{ JSON.stringify(authentication) }</p>
      <p>{ JSON.stringify(profile) }</p>
      <PodcastShowList podcasts={ (playlists.items || []).map(item => item.show) } />
    </Layout>
  );
}