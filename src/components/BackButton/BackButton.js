import React from 'react';
import PropTypes from 'prop-types';
import Style from './BackButton.module.css';

const BackButton = ({ backFunction }) => {
  return (
    <button className={Style.button} onClick={backFunction}>
      &laquo; Go back
    </button>
  );
};

export default BackButton;

BackButton.propTypes = {
  backFunction: PropTypes.func.isRequired,
};
