import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Results from '../../components/Results';
import {
  getActorDetails,
  getMovieDetails,
  getMovieVideos,
  getRecommendedMovies,
} from '../../utils/requests';
import Hero from '../../components/Hero';
import TopCast from '../../components/TopCast';

import Videos from '../../components/Videos';

export default function MoviePage({ movie, actors, recommended, videos }) {
  return (
    <>
      <Header />

      <div className="max-w-[2100px] mx-auto">
        <section>
          <Hero data={movie} type={'movie'} />
        </section>
        <div className="mx-4 md:m-12">
          <section>
            <TopCast actors={actors} />
          </section>
          <section>
            <Videos videos={videos} />
          </section>
          <section>
            <h1 className="tracking-wider text-2xl mt-4">Recommended</h1>
            <Results data={recommended} type={'recommended'} />
          </section>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  const movie = await getMovieDetails(id);
  const actors = await getActorDetails(id);
  const recommended = await getRecommendedMovies(id);

  const videos = await getMovieVideos(id);

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
      actors,
      recommended,
      videos,
    },
  };
}
