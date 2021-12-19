import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { ArrowLeftIcon } from '@heroicons/react/outline';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function MoviePage({ movie }) {
  const router = useRouter();

  console.log(movie);

  //bg-gradient-to-t from-black

  //from-[#06202A]
  return (
    <div className="relative">
      <div className="z-10 w-full h-screen absolute top-0 bg-bg-img-shadow ">
        <img
          src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
          className="object-cover w-full h-full opacity-20 "
        />

        <div className="absolute top-0  h-full w-full">
          <div className="">
            <Header />
          </div>

          <div className="md:mx-12">
            <button
              className="mb-4 uppercase text-gray-200 absolute top-20 left-5 sm:static"
              onClick={() => router.back()}
            >
              <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
                <ArrowLeftIcon className="h-10 w-10 group-hover:animate-bounce" />
                <p className="tracking-widest opacity-0 group-hover:opacity-100">
                  back
                </p>
              </div>
            </button>
            <div className="flex flex-wrap mx-3">
              {movie.production_companies &&
                movie.production_companies.map((c) => (
                  <div key={c.id} className="mx-1 md:mx-4 w-10 h-10">
                    {c.logo_path && <img src={`${BASE_URL}/${c.logo_path}`} />}
                  </div>
                ))}
            </div>
            <div className="bg-black/40 bg-gradient-to-r rounded-3xl p-3 mx-3 md:w-max ">
              <h1 className="text-2xl md:text-4xl mt-1 font-bold uppercase tracking-wider">
                {movie.title}
              </h1>
              <p className="italic opacity-70">{movie.tagline}</p>
              <p className="text-sm md:text-xl mt-2 max-w-lg tracking-wider">
                {movie.overview}
              </p>
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
              <div className="my-10">
                {movie.imdb_id && (
                  <Link href={`https://www.imdb.com/title/${movie.imdb_id}`}>
                    <img src="/imdb.png" className="h-8 md:h-12" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" h-20 bg-gradient-to-b from-black opacity-95">hi</div> */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  if (!id) {
    return {
      props: {
        data: null,
      },
    };
  }

  const req = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=97d56c37e52fb9c99062b6c069ea06b5&`
  );

  const data = await req.json();

  return {
    props: {
      movie: data,
    },
  };
}
