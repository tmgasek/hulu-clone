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
import Layout from '../../components/Layout';

export default function MoviePage({ movie, actors, recommended, videos }) {
  console.log(movie.title);
  return (
    <Layout title={movie.title}>
      <div className="max-w-[2100px] mx-auto">
        <section>
          <Hero data={movie} type={'movie'} />
        </section>
        <div className="m-4 md:m-12">
          <section className="my-12">
            <TopCast actors={actors} />
          </section>
          <section className="my-12">
            <Videos videos={videos} />
          </section>
          <section className="my-12">
            <h1 className="tracking-wider text-2xl mt-4">Recommended</h1>
            <Results data={recommended} type={'recommended'} />
          </section>
        </div>
      </div>
    </Layout>
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
