import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';
import Styles from './App.module.css';
import defaultImage from './images/defaultPhoto.jpeg';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [srcLarge, setSrcLarge] = useState('./images/defaultPhoto.jpeg');
  const [altLarge, setAltLarge] = useState('Default image');
  const [fotos, setFotos] = useState(false);

  const toggleModal = event => {
    if (event !== null) {
      setSrcLarge(event.target.currentSrc);
      setAltLarge(event.target.alt);
    }

    setShowModal(prevState => !prevState);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={Styles.App}>
      <Searchbar onSubmit={searchValue => setSearchValue(searchValue)} />
      <ToastContainer />
      <ImageGallery
        searchValue={searchValue}
        page={page}
        onImageClick={toggleModal}
        onAddFotos={() => setFotos(true)}
      />

      {fotos && <Button onLoadMoreClick={loadMoreImages} />}

      {showModal && (
        <Modal
          srcLargePhoto={srcLarge}
          altLargePhoto={altLarge}
          onModalClick={toggleModal}
        />
      )}
    </div>
  );
}

App.defaultProps = {
  searchValue: '',
  srcLarge: defaultImage,
};

App.propTypes = {
  searchValue: PropTypes.string,
  srcLarge: PropTypes.string,
};

export default App;
