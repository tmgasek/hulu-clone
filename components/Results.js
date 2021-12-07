import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
import { useRouter } from 'next/router';

//TODO: validate max page !

function Results({ data }) {
  const router = useRouter();
  console.log(router);

  const currentPage = router.query.page;
  const currentGenre = router.query.genre;
  const currPath = router.asPath;

  const goToPage = (page) => {
    console.log(currPath);
    if (router.pathname === '/' && currentGenre) {
      router.push(`/?genre=${currentGenre}&page=${page}`);
    } else if (router.pathname === '/') {
      router.push(`/?genre=${'fetchTopRated'}&page=${2}`);
    } else if (router.pathname === '/search' && !currentPage) {
      router.push(`${router.asPath}&page=${2}`);
    } else if (router.pathname === '/search' && currentPage) {
      router.push(`${router.pathname}?term=${router.query.term}&page=${page}`);
    }
  };

  if (!data) return <div></div>;

  return (
    <div>
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap items-center justify-center">
        {data.results.map((item) => (
          <Thumbnail key={item.id} item={item} />
        ))}
      </FlipMove>
      <div
        className="text-2xl text-center pb-10 cursor-pointer"
        onClick={() => goToPage(parseInt(currentPage) + 1)}
      >
        NEXT PAGE
      </div>
    </div>
  );
}

export default Results;
