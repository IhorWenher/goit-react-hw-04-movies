import { useEffect, useState } from 'react';
import moviesApi from '../services/moviesApi';
import ReviewsList from '../components/ReviewsList';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const path = `/movie/${movieId}/reviews`;
    moviesApi.getMovies(path).then(({ results }) => setReviews(results));
  }, [movieId]);

  return <ReviewsList reviews={reviews} />;
};

export default Reviews;
