import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
import { useRouter } from 'next/router';
import NextPage from './NextPage';

//TODO: validate max page !

function Results({ data }) {
  if (!data) return <div></div>;

  return (
    <div>
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap items-center justify-center">
        {data.results.map((item) => (
          <Thumbnail key={item.id} item={item} />
        ))}
      </FlipMove>
      <NextPage />
    </div>
  );
}

export default Results;
