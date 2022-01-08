import Image from 'next/image';
import { BASE_URL } from '../utils';

function timeConvert(n) {
  const hours = n / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + 'h ' + rminutes + 'm';
}

const Hero = ({ data, type }) => {
  const bgClass = `url('${`${BASE_URL}${
    data.backdrop_path || data.poster_path
  }`}')`;

  return (
    <div className="max-h-[800px] relative">
      <div
        className="bg-cover bg-right-top hero-image hidden md:flex md:min-h-[600px] relative "
        style={{
          backgroundImage: bgClass,
        }}
      ></div>

      <div className="md:hidden">
        <Image
          src={`${BASE_URL}${data.backdrop_path || data.poster_path}`}
          height={500}
          width={890}
        />
      </div>

      <div className="md:absolute md:top-12 text-white md:max-w-2xl md:mx-12 mx-4">
        <h1 className="text-xl md:text-4xl tracking-wider font-bold mb-2">
          {data.title || data.name}
        </h1>
        {type === 'movie' && (
          <p className="opacity-60 mb-6 md:mb-12">
            {data.release_date.slice(0, 4)} | {timeConvert(data.runtime)}
          </p>
        )}

        <p className="italic opacity-90 tracking-widest mb-1 md:mb-4">
          {data.tagline}
        </p>
        <p className="text-sm md:text-lg">{data.overview}</p>
        <div className="my-2 text-gray-400 flex gap-5 text-sm flex-wrap">
          {data.genres &&
            data.genres.map((genre) => <p key={genre.id}>{genre.name} </p>)}
        </div>
        {type === 'tv' && (
          <div className="py-2 text-gray-400 text-sm">
            <p>Seasons: {data.number_of_seasons}</p>
            <p>Episodes: {data.number_of_episodes}</p>
            <p>Episode runtime: {data.episode_run_time} minutes</p>
          </div>
        )}
      </div>

      <div className="mx-4 relative">
        <div className="md:absolute md:-top-24 md:right-0 md:left-0  bg-gradient-to-l from-richBlack py-2 flex justify-between">
          <div className="flex ml-9 items-center ">
            <img className="h-6 " src="/Hulu_Logo.svg" alt="" />
          </div>

          <button className="md:mx-12 mr-4 uppercase bg-hulu text-richBlack p-2 px-4 text-sm md:text-md rounded-lg font-semibold tracking-wider my-2">
            watch now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
