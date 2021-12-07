import { useRouter } from 'next/router';

function NextPage() {
  const router = useRouter();

  const currPage = router.query.page;
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
    <div
      className="text-2xl text-center pb-10 cursor-pointer"
      onClick={() => goToPage(parseInt(currPage) + 1)}
    >
      NEXT PAGE
    </div>
  );
}

export default NextPage;
