import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleNameChange = event => {
    this.setState({ searchValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchValue.trim() === '') {
      toast.error('Enter something!');
      return;
    }
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <header className={Styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={Styles.SearchForm}>
          <button type="submit" className={Styles.button}>
            <span className={Styles.label}>Search</span>
          </button>

          <input
            className={Styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
