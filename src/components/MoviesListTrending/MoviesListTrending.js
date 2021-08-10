import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from './MoviesListTrending.module.css';

const MoviesListTrending = ({ movies }) => {
  return (
    <ul className={Style.list}>
      {movies.map(({ original_title, original_name, id, poster_path }) => (
        <li key={id} className={Style.li}>
          <Link to={`/movies/${id}`}>
            {original_title ? original_title : original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesListTrending;

MoviesListTrending.defaultProps = {
  moviesBySearch: [],
};

MoviesListTrending.propTypes = {
  moviesBySearch: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
