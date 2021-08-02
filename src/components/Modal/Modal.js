import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Styles from './Modal.module.css';
import defaultImage from '../../images/defaultPhoto.jpeg';

const modalRoot = document.querySelector('#modal-root');

function Modal({ srcLargePhoto, altLargePhoto, onModalClick }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onModalClick(null);
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModalClick(null);
    }
  };

  return createPortal(
    <div className={Styles.Overlay} onClick={handleBackdropClick}>
      <div className={Styles.Modal}>
        <img src={srcLargePhoto} alt={altLargePhoto} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.defaultProps = {
  searchValue: '',
  srcLarge: defaultImage,
};

Modal.propTypes = {
  srcLarge: PropTypes.string,
  altLarge: PropTypes.string,
  onModalClick: PropTypes.func.isRequired,
};

export default Modal;
