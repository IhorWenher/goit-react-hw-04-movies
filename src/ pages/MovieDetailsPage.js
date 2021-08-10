import { useParams, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

  return (
    <>
      {movie !== null && (
        <>
          <BackButton backFunction={() => history.goBack()} />
          <MovieTemplate movie={movie} />
        </>
      )}

      <CastReviews url={url} movieId={movieId} />
    </>
  );
};

export default MovieDetailsPage;
