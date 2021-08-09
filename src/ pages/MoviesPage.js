import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import SearchBar from '../components/Searchbar';
import MoviesListByTitle from '../components/MoviesListByTitle';

const MoviesView = () => {
  const [moviesBySearch, setMoviesBySearch] = useState([]);

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
