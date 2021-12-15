import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { ArrowLeftIcon } from '@heroicons/react/outline';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function TvPage({ tv }) {
  const router = useRouter();

  console.log(tv);

  //from-[#06202A]
  return (
    <div className="z-10 w-full h-[1000px] md:h-full absolute top-0 ">
      <img
        src={`${BASE_URL}${tv.backdrop_path || tv.poster_path}`}
        className="object-cover w-full h-full opacity-20 "
      />
      <div className="absolute top-0 h-full w-full">
        <div className="">
          <Header />
        </div>

        <div className="md:mx-8">
          <button
            className="mb-4 uppercase text-gray-200 hidden md:block"
            onClick={() => router.back()}
          >
            <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
              <ArrowLeftIcon className="h-10 w-10 group-hover:animate-bounce" />
              <p className="tracking-widest opacity-0 group-hover:opacity-100">
                back
              </p>
            </div>
          </button>
          <div className="hidden md:flex flex-wrap mx-3 mb-6">
            {tv.production_companies &&
              tv.production_companies.map((c) => (
                <div key={c.id} className="mx-1 md:mx-4 w-10 h-10">
                  {c.logo_path && <img src={`${BASE_URL}/${c.logo_path}`} />}
                </div>
              ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between ">
            <div className="bg-black/40 bg-gradient-to-r rounded-3xl p-3  mx-3 md:w-1/2 max-h-full overflow-scroll scrollbar-hide ">
              <div className="flex flex-wrap">
                {tv.created_by &&
                  tv.created_by.map((c) => (
                    <div key={c.id} className="mx-1 md:mx-4">
                      <p>{c.name}</p>
                    </div>
                  ))}
              </div>
              <h1 className="text-xl lg:text-3xl mt-3 font-bold uppercase tracking-wider">
                {tv.name}
              </h1>
              <p className="italic opacity-70 text-xs md:text-md">
                {tv.tagline}
              </p>
              <p className="lg:text-lg text-sm mt-3 md:max-w-lg tracking-wider ">
                {tv.overview}
              </p>
              <div className="mt-1 text-gray-400 flex gap-5 text-sm">
                {tv.genres &&
                  tv.genres.map((genre) => <p key={genre.id}>{genre.name} </p>)}
              </div>

              <p className="mt-1">{tv.episode_run_time} minute long episodes</p>
              <p className="mt-1">
                {tv.vote_average} / 10 ({tv.vote_count} ratings)
              </p>
            </div>

            <div className=" bg-black/40 bg-gradient-to-r rounded-3xl p-3 mx-3 md:w-1/2 my-4 md:my-0 max-h-full overflow-scroll scrollbar-hide">
              <div className="flex flex-col items-center">
                <h1 className="text-xl underline mb-1">Seasons</h1>
                <div className="flex m-auto gap-3 ">
                  {tv.seasons.map((s) => (
                    <div key={s.name} className="w-32">
                      <h1 className="hidden md:block">{s.name}</h1>
                      <Image
                        src={`${BASE_URL}${s.poster_path}`}
                        className="rounded-3xl"
                        height={350}
                        width={240}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
    `https://api.themoviedb.org/3/tv/${id}?api_key=97d56c37e52fb9c99062b6c069ea06b5&`
  );

  const data = await req.json();

  return {
    props: {
      tv: data,
    },
  };
}
