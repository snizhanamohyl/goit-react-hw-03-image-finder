const BASE_URL = 'https://pixabay.com/api/?';
const KEY = '33393357-f6d954601800afd866273582d';

function fetchImages(query) {
  return fetch(
    `${BASE_URL}key=${KEY}&image_type=photo&orientation=horizontal&q=${query}&page=1&per_page=12`
  ).then(response => {
    return response.json();
  });
}

export { fetchImages };
