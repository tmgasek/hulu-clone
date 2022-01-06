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
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=en`,
  },
  tv: {
    title: 'TV Movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en`,
  },
};

export const searchQuery = `${BASE_URL}/search/multi?api_key=${API_KEY}`;

export const getMovieDetails = async (id) => {
  const req = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const data = await req.json();
  return data;
};

export const getActorDetails = async (id) => {
  const req = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  const data = await req.json();
  return data.cast.slice(0, 12);
};

export const getRecommendedMovies = async (id) => {
  const req = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
  );
  const data = await req.json();
  return data;
};

export const getMovieVideos = async (id) => {
  const req = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
  );
  const data = await req.json();
  // const trailer = data.results.find((v) => v.type === 'Trailer');
  // return trailer;
  if (data.results.length >= 2) {
    return data.results.slice(0, 2);
  } else return data.results;
};
