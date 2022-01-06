import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import Hero from '../../components/Hero';
import { getTVActorDetails } from '../../utils/requests';
import TopCast from '../../components/TopCast';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function TvPage({ tv, actors }) {
  const router = useRouter();

  console.log(tv);
  console.log(actors);

  return (
    <>
      <Header />
      <div className="max-w-[2100px] mx-auto">
        <Hero data={tv} type="tv" />

        <section>
          <TopCast actors={actors} />
        </section>
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

  const tv = await req.json();

  const actors = await getTVActorDetails(id);

  return {
    props: {
      tv,
      actors,
    },
  };
}
