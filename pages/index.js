import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import requests from '../utils/requests';
import { useRouter } from 'next/router';

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
