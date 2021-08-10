import Navigation from '../Navigation';
import Styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={Styles.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
