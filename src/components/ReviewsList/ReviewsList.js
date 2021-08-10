import React from 'react';
import PropTypes from 'prop-types';
import Style from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  console.log(reviews);
  return (
    <ul className={Style.list}>
      {reviews && reviews[1] ? (
        reviews.map(({ id, author, content }) => (
          <li key={id} className={Style.li}>
            <h3>Aurhor: {author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
