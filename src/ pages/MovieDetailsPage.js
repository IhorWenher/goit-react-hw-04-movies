import { useParams, useRouteMatch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moviesApi from '../services/moviesApi';
import BackButton from '../components/BackButton';
import MovieTemplate from '../components/MovieTemplate';
import CastReviews from '../components/CastReviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const path = `/movie/${movieId}`;
    moviesApi
      .getMovies(path)
      .then(({ title, poster_path, overview, genres, vote_average }) =>
        setMovie({
          title: title,
          img: poster_path,
          overview: overview,
          genres: genres,
          score: vote_average,
        }),
      );
  }, [movieId]);

  const backFunction = () => {
    const array = history.location.pathname.split('/');
    const onRewiews = array.includes('reviews');
    const onCast = array.includes('cast');

    if (onCast || onRewiews) {
      history.goBack();
    }
    history.goBack();
  };

  return (
    <>
      {movie !== null && (
        <>
          <BackButton backFunction={backFunction} />
          <MovieTemplate movie={movie} />
        </>
      )}

      <CastReviews url={url} movieId={movieId} />
    </>
  );
};

export default MovieDetailsPage;
