import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import Hero from '../../components/Hero';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function TvPage({ tv }) {
  const router = useRouter();

  console.log(tv);

  //from-[#06202A]
  return (
    <>
      <Header />
      <div className="max-w-[1780px] mx-auto">
        <Hero data={tv} type="tv" />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  if (!id) {
    return {
      props: {
        data: null,
      },
    };
  }

  const req = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=97d56c37e52fb9c99062b6c069ea06b5&`
  );

  const data = await req.json();

  return {
    props: {
      tv: data,
    },
  };
}
