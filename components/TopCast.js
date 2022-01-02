import Image from 'next/image';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const TopCast = ({ actors }) => {
  return (
    <>
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
    </>
  );
};

export default TopCast;
