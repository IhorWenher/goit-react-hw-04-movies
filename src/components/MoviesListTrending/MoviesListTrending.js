import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from './MoviesListTrending.module.css';
import defaultImage from '../../images/defaultPhoto.jpeg';

const MoviesListTrending = ({ movies }) => {
  return (
    <ul className={Style.list}>
      {movies.map(({ original_title, original_name, id, poster_path }) => (
        <li key={id} className={Style.li}>
          <Link to={`/movies/${id}`}>
            <img className={Style.img}
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
            )}
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
