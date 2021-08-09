//import { useState } from 'react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import PropTypes from 'prop-types';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './ pages/HomePage';
import MoviesPage from './ pages/MoviesPage';
import MovieDetailsPage from './ pages/MovieDetailsPage';

//import Styles from './App.module.css';
//import defaultImage from './images/defaultPhoto.jpeg';

const App = () => (
  <Container>
    <AppBar />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
    </Switch>
  </Container>
);

/* App.defaultProps = {
  searchValue: '',
  srcLarge: defaultImage,
};

App.propTypes = {
  searchValue: PropTypes.string,
  srcLarge: PropTypes.string,
};
 */
export default App;
