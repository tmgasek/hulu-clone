const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en`,
  },
  fetchAction: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en`,
  },
  fetchComedy: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en`,
  },
  fetchHorror: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en`,
  },
  fetchRomance: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en`,
  },
  fetchSciFi: {
    title: 'SciFi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=en`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=en`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=en`,
  },
  fetchTV: {
    title: 'TV',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en`,
  },
};
