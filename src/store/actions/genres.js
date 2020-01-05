export const type = {
  LOAD_GENRES: 'LOAD_GENRES',
  SET_GENRES: 'SET_GENRES',
  LOADING_GENRES: 'LOADING_GENRES',
};

export function setGenres(genres) {
  return {
    type: type.SET_GENRES,
    data: genres,
  };
}

export function loadingGenres() {
  return {
    type: type.LOADING_GENRES,
  };
}

export function loadGenres() {
  return async function (dispatch, getState) {
    const { authentication } = getState();
    const { accessToken } = authentication;

    return fetch('/api/v1/genre', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(genres => dispatch(setGenres(genres)));
  };
}
