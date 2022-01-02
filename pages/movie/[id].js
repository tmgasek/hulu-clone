import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Results from '../../components/Results';
import {
  getActorDetails,
  getMovieDetails,
  getMovieReviews,
  getMovieVideos,
  getRecommendedMovies,
} from '../../utils/requests';
import Hero from '../../components/Hero';
import TopCast from '../../components/TopCast';

export default function MoviePage({
  movie,
  actors,
  recommended,
  reviews,
  videos,
}) {
  return (
    <>
      <Header />

      <div className="max-w-[1780px] mx-auto">
        <section>
          <Hero data={movie} type={'movie'} />
        </section>
        <section className="m-4">
          <TopCast actors={actors} />
        </section>
        <section className="mx-4"></section>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  const movie = await getMovieDetails(id);
  const actors = await getActorDetails(id);
  const recommended = await getRecommendedMovies(id);
  const reviews = await getMovieReviews(id);
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
      reviews,
      videos,
    },
  };
}
