import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from '../core/List';

export default function GenreList({ genres, refresh }) {
  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <List>
      {
        genres.map(genre => <ListItem key={genre.id}>{genre.name}</ListItem>)
      }
    </List>
  );
}

GenreList.defaultProps = {
  genres: [],
  refresh: () => undefined,
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  refresh: PropTypes.func,
};