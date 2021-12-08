import Image from 'next/image';

export default function MoviePage({ movie }) {
  console.log(movie);

  return (
    <div>
      {/* <Image src={movie.backdrop_path} width={500} height={500} /> */}
      <div>{movie.title}</div>
    </div>
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
    `https://api.themoviedb.org/3/movie/${id}?api_key=97d56c37e52fb9c99062b6c069ea06b5&`
  );

  const data = await req.json();

  return {
    props: {
      movie: data,
    },
  };
}
