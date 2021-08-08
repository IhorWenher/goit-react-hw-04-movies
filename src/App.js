//import { useState } from 'react';
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
//import PropTypes from 'prop-types';
import HomePage from './views/HomeView';
import MoviesPage from './views/MoviesView';
import MovieDetailsPage from './views/MovieDetailsView';

import Styles from './App.module.css';
//import defaultImage from './images/defaultPhoto.jpeg';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className={Styles.link}
          activeClassName={Styles.active}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="Movies"
          className={Styles.link}
          activeClassName={Styles.active}
        >
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/movies" component={MovieDetailsPage} />
      <Route component={HomePage} />
    </Switch>
  </>
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
