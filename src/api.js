// api.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  if (!query) return []; 
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query, 
        language: 'ko-KR', 
      },
    });
    return response.data.results; 
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
