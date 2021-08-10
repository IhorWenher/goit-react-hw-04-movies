import { useEffect, useState } from 'react';
import moviesApi from '../services/moviesApi';
import CastList from '../components/CastList';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const path = `/movie/${movieId}/credits`;
    moviesApi.getMovies(path).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return <CastList cast={cast} />;
};

export default Cast;
