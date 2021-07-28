import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoaderSp from '../Loader';
import Styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import imagesApi from '../services/imagesApi';

class ImageGallery extends Component {
  state = {
    fotos: null,
    error: null,
    status: 'idle',
  };

  static defaultProps = { page: 1 };

  async componentDidUpdate(prevProps, prevState) {
    const searchValue = this.props.searchValue;
    const pageNumber = this.props.page;

    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ status: 'pending' });

      imagesApi
        .fetchImages(searchValue, pageNumber)
        .then(data => this.setState({ fotos: data.hits, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));

      this.props.onAddFotos();
    }

    if (
      prevProps.searchValue === this.props.searchValue &&
      this.props.page !== prevProps.page
    ) {
      this.setState({ status: 'pending' });

      await imagesApi
        .fetchImages(searchValue, pageNumber)
        .then(data =>
          this.setState({
            fotos: [...prevState.fotos, ...data.hits],
            status: 'resolved',
          }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
      this.props.onAddFotos();
    }
  }

  render() {
    const { error, fotos, status } = this.state;

    if (status === 'idle') {
      return (
        <div className={Styles.enterContainer}>
          <h2>Enter something</h2>
        </div>
      );
    }

    if (status === 'pending') {
      return <LoaderSp />;
    }

    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }

    if (status === 'resolved') {
      return (
        <ul className={Styles.ImageGallery}>
          {fotos &&
            fotos.map(photo => (
              <ImageGalleryItem
                key={photo.id}
                src={photo.largeImageURL}
                alt={photo.id}
                onClick={this.props.onImageClick}
              />
            ))}
        </ul>
      );
    }
  }
}

ImageGallery.prorTypes = {
  searchValue: PropTypes.string.isRequired,
  page: PropTypes.number,
  onImageClick: PropTypes.func.isRequired,
  onAddFotos: PropTypes.func.isRequired,
};

export default ImageGallery;
