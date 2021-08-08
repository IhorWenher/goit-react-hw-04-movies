import { useState } from 'react';

const HomeView = () => {
  const [books, setBooks] = useState([]);

  fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=f37c49543e0e2e54afc5ecab7f1ff4ce',
  )
    .then(response => {
      return response.json();
    })
    .then(({ results }) => setBooks(results));

  console.log(books);

  return (
    <ul>
      {books.map(movie => (
        <li>{movie.id}</li>
      ))}
    </ul>
  );
};

export default HomeView;
