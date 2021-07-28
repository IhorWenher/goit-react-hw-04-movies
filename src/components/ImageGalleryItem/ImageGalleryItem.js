import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className={Styles.ImageGalleryItem}>
      <img src={src} alt={alt} className={Styles.image} onClick={onClick} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
