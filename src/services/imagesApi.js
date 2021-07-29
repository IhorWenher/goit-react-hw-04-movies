function fetchImages(searchValue, pageNumber) {
  const perPage = 12;
  const key = '21876535-6bbe37fb3a30d88be5a7a76ee';
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=${perPage}&key=${key}`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Can not find images with name ${searchValue}`),
    );
  });
}

const imagesApi = { fetchImages };
export default imagesApi;
