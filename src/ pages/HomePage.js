import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moviesApi from '../services/moviesApi';

const HomeView = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    moviesApi
      .getMovies('/trending/all/day')
      .then(({ results }) => setBooks(results));
  }, []);

  return (
    <ul>
      {books.map(({ original_title, original_name, name, id, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            {original_title ? original_title : original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomeView;
