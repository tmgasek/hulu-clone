const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
  },
  fetchComedy: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  },
  fetchHorror: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
  },
  fetchRomance: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US`,
  },
  fetchSciFi: {
    title: 'SciFi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=en-US`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=en-US`,
  },
  fetchTV: {
    title: 'TV',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en-US`,
  },
};
