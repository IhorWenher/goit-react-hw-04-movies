import { lazy, Suspense } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from './CastReviews.module.css';

//import Cast from '../../ pages/Cast';
//import Reviews from '../../ pages/Reviews';

const Cast = lazy(() => import('../../ pages/Cast'));
const Reviews = lazy(() => import('../../ pages/Reviews'));

const CastReviews = ({ url, movieId }) => {
  return (
    <div className={Style.container}>
      <div className={Style.buttons}>
        <NavLink
          to={`${url}/cast`}
          className={Style.link}
          activeClassName={Style.activeLink}
        >
          Cast
        </NavLink>
        <NavLink
          to={`${url}/reviews`}
          className={Style.link}
          activeClassName={Style.activeLink}
        >
          Reviews
        </NavLink>
      </div>

      <Suspense fallback={<h2>Loadinh...</h2>}>
        <Switch>
          <Route path={`${url}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${url}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default CastReviews;

CastReviews.propTypes = {
  url: PropTypes.string,
  movieId: PropTypes.string,
};
