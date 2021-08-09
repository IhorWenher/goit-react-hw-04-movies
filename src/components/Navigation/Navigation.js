import { NavLink } from 'react-router-dom';
import Styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={Styles.nav}>
    <NavLink
      exact
      to="/"
      className={Styles.link}
      activeClassName={Styles.active}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      className={Styles.link}
      activeClassName={Styles.active}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
