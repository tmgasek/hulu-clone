import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Navbar */}
      <Navbar />
      {/* Results */}
      <Results data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const req = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const data = await req.json();
  return {
    props: {
      data: data.results,
    },
  };
}
