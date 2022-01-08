import Hero from '../../components/Hero';
import { getTVActorDetails, getRecommendedTV } from '../../utils/requests';
import TopCast from '../../components/TopCast';
import Seasons from '../../components/Seasons';
import Results from '../../components/Results';
import Layout from '../../components/Layout';

export default function TvPage({ tv, actors, recommended }) {
  return (
    <Layout title={tv.name}>
      <div className="max-w-[2100px] mx-auto">
        <section>
          <Hero data={tv} type="tv" />
        </section>

        <div className="m-4 md:m-12 ">
          <section className="my-12">
            <TopCast actors={actors} />
          </section>
          <section className="my-12">
            <Seasons tv={tv} />
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
  const recommended = await getRecommendedTV(id);
  return {
    props: {
      tv,
      actors,
      recommended,
    },
  };
}
