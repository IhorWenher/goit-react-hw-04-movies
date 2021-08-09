import { useEffect, useState } from 'react';
import moviesApi from '../services/moviesApi';
import defaultImage from '../images/defaultPhoto.jpeg';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const path = `/movie/${movieId}/credits`;
    moviesApi.getMovies(path).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : defaultImage
              }
              alt={id}
              width="300"
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
