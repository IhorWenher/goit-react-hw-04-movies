import React from 'react';
import PropTypes from 'prop-types';
import Style from './CastList.module.css';
import defaultImage from '../../images/defaultPhoto.jpeg';

const CastList = ({ cast }) => {
  return (
    <ul className={Style.list}>
      {cast && cast.length >= 1 ? (
        cast.map(({ id, name, character, profile_path }) => (
          <li className={Style.li} key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : defaultImage
              }
              alt={id}
              width="300"
            />
            <h3>{name}</h3>
            <p className={Style.p}>Character: {character}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default CastList;

CastList.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
