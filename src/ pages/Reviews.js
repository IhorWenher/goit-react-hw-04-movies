import { useEffect, useState } from 'react';
import moviesApi from '../services/moviesApi';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const path = `/movie/${movieId}/reviews`;
    moviesApi.getMovies(path).then(({ results }) => setReviews(results));
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Aurhor: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
