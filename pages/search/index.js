import Header from '../../components/Header';
import { useState } from 'react';
import Results from '../../components/Results';
import { useRouter } from 'next/router';
import { searchQuery } from '../../utils/requests';

export default function SearchPage({ data }) {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?term=${term}`);
    setTerm('');
  };

  return (
    <div>
      <Header />
      <div className="m-5 p-5 group">
        <form onSubmit={handleSubmit} className="flex justify-center gap-3 ">
          <input
            className="p-2 px-4 rounded-3xl text-black"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search movies / shows"
          />
          <input
            className="font-semibold rounded-full px-4 bg-transparent border-2 cursor-pointer group-hover:animate-bounce"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <Results data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = context.query.term;
  const page = context.query.page;

  if (!query) {
    return {
      props: {
        data: null,
      },
    };
  }

  const req = await fetch(`${searchQuery}&query=${query}&page=${page || 1}`);

  const data = await req.json();

  return {
    props: {
      data,
    },
  };
}
