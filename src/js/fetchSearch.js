import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31903531-47471845ef932624bfd3a089f';
const URL_SETTINGS =
  'image_type=photo&orientation=horizontal&safesearch=true&page';

export async function fetchSearch(query, page, per_page) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&${URL_SETTINGS}=${page}&per_page=${per_page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
