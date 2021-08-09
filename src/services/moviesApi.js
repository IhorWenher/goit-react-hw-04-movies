const BASE_URL = 'https://api.themoviedb.org/3';
const Key = '?api_key=f37c49543e0e2e54afc5ecab7f1ff4ce';

async function getMovies(pathName) {
  const url = `${BASE_URL}${pathName}${Key}`;
  const response = await fetch(url);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Can not find images with name'));
}

async function getMoviesBySearch(query) {
  const url = `${BASE_URL}/search/movie${Key}&query=${query}`;
  const response = await fetch(url);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Can not find images with name'));
}

const moviesApi = { getMovies, getMoviesBySearch };

export default moviesApi;
