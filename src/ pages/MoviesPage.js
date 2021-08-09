import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/Searchbar';

const MoviesView = () => {
  const [moviesBySearch, setMoviesBySearch] = useState(null);

  const handleSearchValue = movies => {
    setMoviesBySearch(movies);
  };

  console.log(setMoviesBySearch);

  return (
    <>
      <SearchBar searchValueChange={movies => handleSearchValue(movies)} />

      <ul>
        {moviesBySearch &&
          moviesBySearch.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesView;
