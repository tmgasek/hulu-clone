import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react';
import { useRouter } from 'next/router';
import { BASE_URL } from '../utils';

const Thumbnail = forwardRef(({ item }, ref) => {
  const getImgSrc = (item) => {
    if (item.backdrop_path) {
      return `${BASE_URL}${item.backdrop_path}`;
    }
    if (item.poster_path) {
      return `${BASE_URL}${item.poster_path}`;
    }
    return `/img404.jpg`;
  };

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={getImgSrc(item)}
      />
      {/* <Image height={100} width={100} src="/movie-icon-png-2.jpg" /> */}
      <div className="p-2">
        <p className="truncate max-w-md">{item.overview}</p>
        <h2 className="truncate max-w-md mt-1 text-2xl text-white transition-all duration-75 ease-in group-hover:font-bold">
          {item.title || item.name}
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
