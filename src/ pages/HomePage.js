import { useState, useEffect } from 'react';
import moviesApi from '../services/moviesApi';
import MoviesListTrending from '../components/MoviesListTrending';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi
      .getMovies('/trending/all/day')
      .then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      <MoviesListTrending movies={movies} />
    </>
  );
};

export default HomePage;
