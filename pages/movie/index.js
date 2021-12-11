import Image from 'next/image';
import { useRouter } from 'next/router';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function MoviePage({ movie }) {
  const router = useRouter();

  console.log(movie);

  //from-[#06202A]
  return (
    <div className="relative">
      <div className="z-10 w-full h-screen absolute top-0 bg-gradient-to-t from-black  ">
        <img
          src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
          className="object-cover w-full h-full opacity-20 "
        />

        <div className="absolute top-0 m-4 md:m-20 md:w-1/2">
          <button
            className="p-1 px-4 mb-4 uppercase text-xl text-white"
            onClick={() => router.back()}
          >
            back
          </button>
          <div className="flex flex-wrap">
            {movie.production_companies &&
              movie.production_companies.map((c) => (
                <div key={c.id} className="mx-1 md:mx-4 w-12 h-12">
                  {c.logo_path && <img src={`${BASE_URL}/${c.logo_path}`} />}
                </div>
              ))}
          </div>
          <h1 className="text-3xl md:text-4xl mt-20 font-semibold uppercase tracking-wider">
            {movie.title}
          </h1>
          <p className="italic opacity-70">{movie.tagline}</p>
          <p className="md:text-lg mt-10 max-w-lg">{movie.overview}</p>
          <div className="mt-4">
            {movie.genres &&
              movie.genres.map((genre) => <p key={genre.id}>{genre.name} </p>)}
          </div>
          {movie.runtime != 0 && (
            <p className="mt-4">{movie.runtime} minutes</p>
          )}
        </div>
      </div>
      {/* <div className=" h-20 bg-gradient-to-b from-black opacity-95">hi</div> */}
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
