import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import queryString from 'query-string';
import moviesApi from '../services/moviesApi';
import SearchBar from '../components/Searchbar';
import MoviesListByTitle from '../components/MoviesListByTitle';

const MoviesView = () => {
  const [moviesBySearch, setMoviesBySearch] = useState([]);

  useEffect(() => {
    const movieName = queryString.parse(window.location.search);

    if (movieName.query) {
      moviesApi
        .getMoviesBySearch(movieName.query)
        .then(({ results }) => setMoviesBySearch(results));
    }
  }, []);

  const handleSearchValue = movies => {
    setMoviesBySearch(movies);
  };

  return (
    <>
      <SearchBar searchValueChange={movies => handleSearchValue(movies)} />
      <ToastContainer />
      <MoviesListByTitle moviesBySearch={moviesBySearch} />
    </>
  );
};

export default MoviesView;
