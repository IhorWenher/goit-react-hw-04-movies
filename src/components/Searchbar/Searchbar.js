import React from 'react';
import { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import moviesApi from '../../services/moviesApi';
import Styles from './Searchbar.module.css';

const Searchbar = ({ searchValueChange }) => {
  const [searchValue, setSearchValue] = useState('');
  const [beforeSearch, setBeforeSearch] = useState('');
  const [moviesBySearch, setMoviesBySearch] = useState([]);

  useEffect(() => {
    if (searchValue !== '') {
      moviesApi
        .getMoviesBySearch(searchValue)
        .then(({ results }) => setMoviesBySearch(results));
    }
  }, [searchValue]);

  const handleNameChange = event => {
    setBeforeSearch(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (setBeforeSearch === '') {
      return;
    }

    setSearchValue(beforeSearch);
    searchValueChange(moviesBySearch);
  };

  return (
    <>
      <header className={Styles.Searchbar}>
        <form onSubmit={handleSubmit} className={Styles.SearchForm}>
          <button type="submit" className={Styles.button}>
            <span className={Styles.label}>Search</span>
          </button>

          <input
            className={Styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search Movie"
            onChange={handleNameChange}
          />
        </form>
      </header>
    </>
  );
};

/* Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}; */

export default Searchbar;
