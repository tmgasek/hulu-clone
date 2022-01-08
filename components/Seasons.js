import Image from 'next/image';
import { BASE_URL } from '../utils';

const Seasons = ({ tv }) => {
  return (
    <div>
      <h1 className="tracking-wider text-2xl my-2">Seasons</h1>

      <div className="flex gap-2 overflow-x-auto py-2">
        {tv.seasons.map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-1">
            <Image
              layout="fixed"
              src={`${BASE_URL}/${s.poster_path}`}
              height={195}
              width={130}
            />
            <h1>{s.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
