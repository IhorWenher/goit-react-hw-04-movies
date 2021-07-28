import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.module.css';

const Button = ({ onLoadMoreClick }) => {
  return (
    <div className={Styles.Container}>
      <button type="button" className={Styles.Button} onClick={onLoadMoreClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
};

export default Button;
