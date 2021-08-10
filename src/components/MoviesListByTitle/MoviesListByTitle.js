import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from './MoviesListByTitle.module.css';

const MoviesListByTitle = ({ moviesBySearch }) => {
  return (
    <ul>
      {moviesBySearch &&
        moviesBySearch.map(({ id, title }) => (
          <li className={Style.li} key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default MoviesListByTitle;

MoviesListByTitle.defaultProps = {
  moviesBySearch: [],
};

MoviesListByTitle.propTypes = {
  moviesBySearch: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string }),
  ),
};
