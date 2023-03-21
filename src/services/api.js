const BASE_URL = 'https://pixabay.com/api/?';
const KEY = '33393357-f6d954601800afd866273582d';

export default class SearchImages {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  async fetchImages() {
    return fetch(
      `${BASE_URL}key=${KEY}&image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12`
    ).then(response => {
      return response.json();
    });
  }
}

export { SearchImages };
