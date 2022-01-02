import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Results from '../../components/Results';
import {
  getActorDetails,
  getMovieDetails,
  getMovieReviews,
  getMovieVideos,
  getRecommendedMovies,
} from '../../utils/requests';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

function timeConvert(n) {
  const hours = n / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + 'h ' + rminutes + 'm';
}

export default function MoviePage({
  movie,
  actors,
  recommended,
  reviews,
  videos,
}) {
  const bgClass = `url('${`${BASE_URL}${
    movie.backdrop_path || movie.poster_path
  }`}')`;

  return (
    <div className="">
      <Header />

      <section>
        <div className="max-w-[1780px] max-h-[800px] mx-auto relative  ">
          <div
            className="bg-cover bg-right-top hero-image hidden md:flex "
            style={{
              backgroundImage: bgClass,
            }}
          >
            <div className="flex text-white flex-col md:min-h-[600px] max-h-[800px] max-w-xl z-30 mx-12 py-12 justify-center">
              <h1 className="text-4xl tracking-wider font-bold mb-2">
                {movie.title}
              </h1>
              <p className="opacity-60 mb-12">
                {movie.release_date.slice(0, 4)} | {timeConvert(movie.runtime)}
              </p>
              <p className="italic opacity-90 tracking-widest mb-4">
                {movie.tagline}
              </p>
              <p className="text-lg">{movie.overview}</p>
              <div className="my-2 text-gray-400 flex gap-5 text-sm">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <p key={genre.id}>{genre.name} </p>
                  ))}
              </div>
            </div>
          </div>

          <div className="md:hidden text-sm">
            <div className="relative">
              <Image
                src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
                height={500}
                width={890}
              />
            </div>
            <div className="mx-4">
              <h1 className="text-xl tracking-wider font-bold mb-1">
                {movie.title}
              </h1>
              <p className="opacity-60 mb-4">
                {movie.release_date.slice(0, 4)} | {timeConvert(movie.runtime)}
              </p>
              <p className="italic opacity-90 tracking-widest mb-1">
                {movie.tagline}
              </p>
              <p className="text-sm">{movie.overview}</p>
              <div className="my-2 text-gray-400 flex gap-5 text-sm">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <p key={genre.id}>{genre.name} </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-4 relative">
        <div className="md:absolute md:-top-24 md:right-0 md:left-0  bg-gradient-to-l from-richBlack py-2 flex justify-between">
          <div className="flex ml-9 items-center ">
            <img className="h-6 " src="/Hulu_Logo.svg" alt="" />
          </div>

          <button className="md:mx-12 mr-4 uppercase bg-hulu text-richBlack p-2 px-4 text-sm md:text-md rounded-lg font-semibold tracking-wider my-2">
            watch now
          </button>
        </div>
      </section>

      <section className="m-4">
        <h1 className="tracking-wider text-2xl md:m-8">Top cast</h1>

        <div className="hidden md:grid md:grid-cols-3 mx-8 gap-4">
          {actors.map((a) => (
            <div key={a.id} className="flex items-center gap-4">
              <Image
                src={`${BASE_URL}/${a.profile_path}`}
                className="object-cover rounded-full"
                height={120}
                width={120}
              />
              <div>
                <p className="text-xl">{a.name}</p>
                <p className="text-gray-400">as {a.character}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col items-center p-3 overflow-scroll scrollbar-hide">
          <div className="flex m-auto gap-4">
            {actors.map((a) => (
              <div key={a.name} className="w-28">
                <Image
                  src={`${BASE_URL}/${a.profile_path}`}
                  className="object-cover rounded-full"
                  height={120}
                  width={120}
                />
                <div>
                  <p className="text-center">{a.name}</p>
                  <p className="text-center text-sm text-gray-400">
                    {a.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-4"></section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  const movie = await getMovieDetails(id);
  const actors = await getActorDetails(id);
  const recommended = await getRecommendedMovies(id);
  const reviews = await getMovieReviews(id);
  const videos = await getMovieVideos(id);

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
      actors,
      recommended,
      reviews,
      videos,
    },
  };
}
