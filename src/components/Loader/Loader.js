import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Styles from './Loader.module.css';

const LoaderSp = () => {
  return (
    <div className={Styles.container}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default LoaderSp;
