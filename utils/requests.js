const API_KEY = process.env.API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

export default {
  trending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en`,
  },
  topRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en`,
  },
  action: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en`,
  },
  comedy: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en`,
  },
  horror: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en`,
  },
  romance: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en`,
  },
  mystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en`,
  },
  scifi: {
    title: 'SciFi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=en`,
  },
  western: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=en`,
  },
  animation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=en`,
  },
  tv: {
    title: 'TV',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en`,
  },
};

export const searchQuery = `${BASE_URL}/search/multi?api_key=${API_KEY}`;
export const movieQuery = (movieId) =>
  `${BASE_URL}/movie/${movieId}/?api_key=${API_KEY}`;
