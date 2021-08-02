import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoaderSp from '../Loader';
import Styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import imagesApi from '../../services/imagesApi';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RRESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function ImageGallery({ searchValue, page, onImageClick, onAddFotos }) {
  const [fotos, setFotos] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    if (searchValue !== '' && page === 1) {
      setStatus(Status.PENDING);
      imagesApi
        .fetchImages(searchValue, page)
        .then(data => {
          setFotos(data.hits);
          setStatus(Status.RRESOLVED);
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });

      onAddFotos();
      return;
    }

    if (searchValue !== '' && page > 1) {
      setStatus(Status.PENDING);

      imagesApi
        .fetchImages(searchValue, page)
        .then(data => {
          setFotos(prevState => [...prevState, ...data.hits]);
          setStatus(Status.RRESOLVED);
        })
        .catch(error => {
          setError(error);
          setError(Status.REJECTED);
        });

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });

      onAddFotos();
    }
  }, [searchValue, page, onAddFotos]);

  if (status === Status.IDLE) {
    return (
      <div className={Styles.enterContainer}>
        <h2>Enter something</h2>
      </div>
    );
  }

  if (status === Status.PENDING) {
    return <LoaderSp />;
  }

  if (status === Status.REJECTED) {
    return <h2>{error.message}</h2>;
  }

  if (status === Status.RRESOLVED) {
    return (
      <ul className={Styles.ImageGallery}>
        {fotos &&
          fotos.map(photo => (
            <ImageGalleryItem
              key={photo.id}
              src={photo.largeImageURL}
              alt={photo.id}
              onClick={onImageClick}
            />
          ))}
      </ul>
    );
  }
}

ImageGallery.defaultProps = { page: 1 };

ImageGallery.prorTypes = {
  searchValue: PropTypes.string.isRequired,
  page: PropTypes.number,
  onImageClick: PropTypes.func.isRequired,
  onAddFotos: PropTypes.func.isRequired,
};

export default ImageGallery;
