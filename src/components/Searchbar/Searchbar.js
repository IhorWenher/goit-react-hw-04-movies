import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moviesApi from '../../services/moviesApi';
import Styles from './Searchbar.module.css';

const Searchbar = ({ searchValueChange }) => {
  const [searchValue, setSearchValue] = useState('');
  const [moviesBySearch, setMoviesBySearch] = useState([]);

  useEffect(() => {
    if (searchValue !== '') {
      moviesApi
        .getMoviesBySearch(searchValue)
        .then(({ results }) => setMoviesBySearch(results));
    }
  }, [searchValue]);

  const handleNameChange = event => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      toast.error('Enter something!');
      return;
    }

    searchValueChange(moviesBySearch);
  };

  return (
    <div className={Styles.Searchbar}>
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
    </div>
  );
};

Searchbar.propTypes = {
  searchValueChange: PropTypes.func.isRequired,
};

export default Searchbar;
