import { connect } from 'react-redux';

import { loadGenres } from '../../store/actions/genres';

import GenreList from '../../presentational/GenreList';

const mapStateToProps = function ({ genres }) {
  return {
    genres: genres.data,
    loading: genres.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  refresh: () => dispatch(loadGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);