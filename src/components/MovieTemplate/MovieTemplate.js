import React from 'react';
import PropTypes from 'prop-types';
import Style from './MovieTemplate.module.css';

const MovieTemplate = ({ movie }) => {
  return (
    <div className={Style.container}>
      <img src={`https://image.tmdb.org/t/p/w300${movie.img}`} alt="" />

      <div className={Style.info}>
        <h1>{movie.title}</h1>
        <p>User Score: {movie.score}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <ul>
          {movie.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieTemplate;

MovieTemplate.defaultProps = {
  movie: {},
};

MovieTemplate.propTypes = {
  movie: PropTypes.object,
};
