import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';

//import HomePage from './ pages/HomePage';
//import MoviesPage from './ pages/MoviesPage';
//import MovieDetailsPage from './ pages/MovieDetailsPage';

const HomePage = lazy(() =>
  import('./ pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./ pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './ pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => (
  <Container>
    <AppBar />

    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
