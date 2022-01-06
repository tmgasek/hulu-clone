import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
import { useRouter } from 'next/router';
import Pagination from './Pagination';

function Results({ data, type }) {
  const router = useRouter();

  const pushBasedOnMediaType = (item) => {
    if (item.media_type === 'tv') {
      router.push(`/tv/${item.id}`);
    } else {
      router.push(`/movie/${item.id}`);
    }
  };

  const getDataArr = () => {
    if (type == 'recommended') {
      return data.results.slice(0, 15);
    } else return data.results;
  };

  if (!data) return <div></div>;

  //small bug here with 3xl:flex in results view as recommended.
  return (
    <div>
      <FlipMove className="my-4 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap items-center justify-center">
        {getDataArr().map((item) => (
          <div
            key={item.id}
            //could create a Link tag here if concerned with SEO
            onClick={() => pushBasedOnMediaType(item)}
          >
            <Thumbnail item={item} />
          </div>
        ))}
      </FlipMove>
      {type !== 'recommended' && <Pagination max={data.total_pages} />}
    </div>
  );
}

export default Results;
