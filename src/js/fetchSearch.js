import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31903531-47471845ef932624bfd3a089f';

export async function fetchSearch(query, page, per_page) {
 try {
   const { data } = await axios.get(
     `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=${per_page}`
   );
   return data;
 } catch (error) {
   console.error(error);
 }
}

//  async fetchImages() {
//     console.log(this);

//     try {
//       const response = await axios.get(
//         `/?key=${API_KEY}&q=${this.searchQuery}&page=${this.page}&${URL_SETTINGS}`
//       );
//       const data = await response.data;
//       this.incrementPage();
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }



// const { default: axios } = require('axios');
// import { searchParams } from './searchParams';

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY_SUCSESS = '30821762-b8f2171742f26b4a3279c46a9';

// export async function fetchImage(query, page, per_page) {
//   const { data } = await axios.get(
//     `${BASE_URL}?key=${KEY_SUCSESS}&q=${query}&page=${page}&per_page=${per_page}`,
//     searchParams
//   );
//   return data;
// }

// searchParams = {
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
// };