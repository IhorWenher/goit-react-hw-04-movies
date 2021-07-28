import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  state = {
    srcLarge: this.props.srcLarge,
    altLarge: this.props.altLarge,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onModalClick(null);
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onModalClick(null);
    }
  };

  render() {
    const { srcLarge, altLarge } = this.state;

    return createPortal(
      <div className={Styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={Styles.Modal}>
          <img src={srcLarge} alt={altLarge} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  srcLarge: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};

export default Modal;
