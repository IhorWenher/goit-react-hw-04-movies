import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from './MoviesListByTitle.module.css';
import defaultImage from '../../images/defaultPhoto.jpeg';

const MoviesListByTitle = ({ moviesBySearch }) => {
  return (
    <ul className={Style.list}>
      {moviesBySearch &&
        moviesBySearch.map(({ id, title, original_name, original_title, poster_path }) => (
          <li className={Style.li} key={id}>
            <Link to={`/movies/${id}`}><img className={Style.img}
              src={poster_path 
                ? `https://image.tmdb.org/t/p/w300${poster_path}` 
                : defaultImage
                }
              alt={original_title ? original_title : original_name}
            />
            {original_title ? (
              <p className={Style.p}>{original_title}</p>
            ) : (
              <p className={Style.p}>{original_name}</p>
            )}</Link>
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
