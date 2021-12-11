import Image from 'next/image';
import { useRouter } from 'next/router';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function TvPage({ tv }) {
  const router = useRouter();

  console.log(tv);

  //from-[#06202A]
  return (
    <div className="relative">
      <div className="z-10 w-full h-screen absolute top-0 bg-gradient-to-t from-black  ">
        <img
          src={`${BASE_URL}${tv.backdrop_path || tv.poster_path}`}
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
            {tv.production_companies &&
              tv.production_companies.map((c) => (
                <div key={c.id} className="mx-1 md:mx-4">
                  <Image
                    src={`${BASE_URL}/${c.logo_path}`}
                    width={100}
                    height={20}
                  />
                </div>
              ))}
          </div>
          <div className="flex flex-wrap">
            {tv.created_by &&
              tv.created_by.map((c) => (
                <div key={c.id} className="mx-1 md:mx-4">
                  <p>{c.name}</p>
                </div>
              ))}
          </div>
          <h1 className="text-3xl md:text-4xl mt-20 font-semibold uppercase tracking-wider">
            {tv.name}
          </h1>
          <p className="italic opacity-70">{tv.tagline}</p>
          <p className="md:text-lg mt-10 max-w-lg">{tv.overview}</p>
          <div className="mt-4">
            {tv.genres &&
              tv.genres.map((genre) => <p key={genre.id}>{genre.name} </p>)}
          </div>
          {tv.in_production && <p className="mt-4">In production</p>}
          <p className="mt-4">{tv.episode_run_time} minute long episodes</p>
          <p>
            {tv.vote_average} / 10 ({tv.vote_count} ratings)
          </p>
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
    `https://api.themoviedb.org/3/tv/${id}?api_key=97d56c37e52fb9c99062b6c069ea06b5&`
  );

  const data = await req.json();

  return {
    props: {
      tv: data,
    },
  };
}
