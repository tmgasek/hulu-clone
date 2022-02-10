import { useRouter } from 'next/router';

function Pagination({ max }) {
  const router = useRouter();

  //TODO: fix the 1 unnecessary checking if !page

  const currPage = parseInt(router.query.page || 1);
  const currGenre = router.query.genre;
  const currBase = router.pathname;

  const goToPage = (page) => {
    if (currBase === '/' && currGenre) {
      router.push(`/?genre=${currGenre}&page=${page}`);
    } else if (currBase === '/') {
      router.push(`/?genre=${'TopRated'}&page=${2}`);
    } else if (currBase === '/search' && !currPage) {
      router.push(`${router.asPath}&page=${2}`);
    } else if (currBase === '/search' && currPage) {
      router.push(`${currBase}?term=${router.query.term}&page=${page}`);
    }
  };

  return (
    <div className="flex justify-center gap-5">
      {currPage && currPage !== 1 && (
        <div
          className="text-2xl text-center pb-10 cursor-pointer"
          onClick={() => goToPage(currPage - 1)}
        >
          PREVIOUS PAGE
        </div>
      )}
      {currPage !== max && (
        <div
          className="text-2xl text-center pb-10 cursor-pointer"
          onClick={() => goToPage(currPage + 1)}
        >
          NEXT PAGE
        </div>
      )}
    </div>
  );
}

export default Pagination;
