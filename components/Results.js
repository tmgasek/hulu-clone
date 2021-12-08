import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
import { useRouter } from 'next/router';
import NextPage from './NextPage';

//TODO: validate max page !

function Results({ data }) {
  const router = useRouter();

  if (!data) return <div></div>;

  return (
    <div>
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap items-center justify-center">
        {data.results.map((item) => (
          <div
            key={item.id}
            //could create a Link tag here if concerned with SEO
            onClick={() => router.push(`/movie?id=${item.id}`)}
          >
            <Thumbnail item={item} />
          </div>
        ))}
      </FlipMove>
      <NextPage />
    </div>
  );
}

export default Results;
