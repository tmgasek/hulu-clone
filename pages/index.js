import Navbar from '../components/Navbar';
import Results from '../components/Results';
import requests from '../utils/requests';
import Layout from '../components/Layout';

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
