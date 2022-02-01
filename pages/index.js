import requests from '../utils/requests';
import { Layout, Results, Navbar } from '../components';

export default function Home({ data }) {
  return (
    <Layout>
      <Navbar />
      <Results data={data} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const page = context.query.page;

  const req = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.trending.url
    }&page=${page || 1}`
  );
  const data = await req.json();
  return {
    props: {
      data,
    },
  };
}
