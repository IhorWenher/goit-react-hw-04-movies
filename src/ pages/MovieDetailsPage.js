import { useParams, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import moviesApi from '../services/moviesApi';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
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
    <div>
      {movie !== null && (
        <>
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w300${movie.img}`} alt="" />
          <p>User Score: {movie.score}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}

      <Link to={`${url}/cast`}>Cast</Link>
      <Link to={`${url}/reviews`}>Reviews</Link>

      <Switch>
        <Route path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </div>
  );
};

export default MovieDetailsPage;
