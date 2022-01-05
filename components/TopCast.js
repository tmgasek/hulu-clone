import Image from 'next/image';
import { useState } from 'react';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const TopCast = ({ actors }) => {
  const [viewAll, setViewAll] = useState(false);

  let mdActors = actors;

  if (!viewAll) {
    mdActors = actors.slice(0, 3);
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="tracking-wider text-2xl md:m-8">Top cast</h1>
        <button
          className="bg-indigo-900 py-3 px-7 rounded-xl hidden md:block"
          onClick={() => setViewAll(!viewAll)}
        >
          {viewAll ? 'contract' : 'view all'}
        </button>
      </div>

      <div className="hidden md:grid md:grid-cols-3 mx-8 gap-4">
        {mdActors.map((a) => (
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
    </>
  );
};

export default TopCast;
