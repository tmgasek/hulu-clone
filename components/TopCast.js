import Image from 'next/image';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const TopCast = ({ actors }) => {
  const getActorPictureSrc = (url) => {
    if (!url) {
      return '/avatar-placeholder.png';
    } else {
      return `${BASE_URL}/${url}`;
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="tracking-wider text-2xl mt-4">Top cast</h1>
      </div>

      <div className="grid grid-cols-2 text-xs md:text-base md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 my-4 ">
        {actors.map((a) => (
          <div key={a.id} className="flex flex-col items-center justify-center">
            <div>
              <Image
                src={getActorPictureSrc(a.profile_path)}
                className="object-cover rounded-full"
                height={120}
                width={120}
              />
            </div>
            <div className="text-center">
              <p className="text-xl">{a.name}</p>
              <p className="text-gray-400">as {a.character}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCast;
