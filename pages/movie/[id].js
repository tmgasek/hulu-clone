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

export default function MoviePage({
  movie,
  actors,
  recommended,
  reviews,
  videos,
}) {
  // console.log(videos);

  const bgClass = `url('${`${BASE_URL}${
    movie.backdrop_path || movie.poster_path
  }`}')`;

  return (
    <>
      <Header />
      <div className="">
        {/* <div className="relative max-w-[1780px] mx-auto ">
          <Image
            src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
            className=""
            height={1000}
            width={1780}
          />
          <div className="absolute top-0">hhello</div>
        </div> */}

        <section className="max-w-[1780px] mx-auto relative">
          <div
            className="bg-cover bg-right hero-image flex"
            style={{
              backgroundImage: bgClass,
            }}
          >
            <div className="flex flex-col min-h-[800px] max-h-[800px] max-w-xl z-30 mx-12 py-12 justify-center">
              <h1 className="text-4xl tracking-wider  mb-12">{movie.title}</h1>
              <p className="text-xl">{movie.overview}</p>
            </div>
          </div>
        </section>

        {/* <section className="bg-red-200 text-green-900">
          <div className="relative">
            <div
              className="min-h-[800px] hero-image bg-right-bottom bg-cover flex"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)',
              }}
            >
              <div className="relative container mx-auto p-4 flex items-end z-10">
                <div>
                  <div className="content float-left py-4 px-5 my-5">
                    <div className="heading mb-3 text-2xl md:text-4xl">
                      Affordable year-round care. No insurance required!
                    </div>
                    <div className="text leading-normal hidden sm:block">
                      Helping Women Meet All of their Health Care Needs
                    </div>
                  </div>
                  <div className="cta clear-left px-5">
                    <a
                      className="
                no-underline
                btn btn-primary 
                block sm:inline-block global-transition
                text-white"
                      href=""
                      target=""
                    >
                      <div className="flex justify-center items-center">
                        <span>Join Alpha Today</span>
                        <span className="fa fa-xs fa-arrow-right ml-4"></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <div className="">
          <div className="">
            {movie.production_companies &&
              movie.production_companies.map((c) => (
                <div key={c.id} className="w-16">
                  {c.logo_path && <img src={`${BASE_URL}/${c.logo_path}`} />}
                </div>
              ))}
          </div>
          <div className=" ">
            <h1 className="">{movie.title}</h1>
            <p className="">{movie.tagline}</p>
            <p className="">{movie.overview}</p>
            <div className="mt-1 text-gray-400 flex gap-5 text-sm">
              {movie.genres &&
                movie.genres.map((genre) => (
                  <p key={genre.id}>{genre.name} </p>
                ))}
            </div>
            {movie.runtime != 0 && (
              <p className="mt-1">{movie.runtime} minutes</p>
            )}
            <div className="mt-1">
              <p>
                {movie.vote_average} / 10 ({movie.vote_count} ratings)
              </p>
            </div>
            <div className="my-2 md:my-10">
              {movie.imdb_id && (
                <Link href={`https://www.imdb.com/title/${movie.imdb_id}`}>
                  <img src="/imdb.png" className="h-8 md:h-12" />
                </Link>
              )}
            </div>
          </div>
        </div> */}
        {/* <div>
        <h2>Recommended</h2>
        <Results data={recommended} />
      </div> */}
      </div>
    </>
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
