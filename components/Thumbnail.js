import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const Thumbnail = forwardRef(({ item }, ref) => {
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${item.backdrop_path || item.poster_path}` ||
          `${BASE_URL}${item.poster_path}`
        }
      />
      <div className="p-2">
        <p className="truncate max-w-md">{item.overview}</p>
        <h2 className="truncate max-w-md mt-1 text-2xl text-white transition-all duration-75 ease-in group-hover:font-bold">
          {item.title || item.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {item.release_date || item.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" />
          {item.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
