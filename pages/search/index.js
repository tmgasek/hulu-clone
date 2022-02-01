import { useState } from 'react';
import { useRouter } from 'next/router';
import { searchQuery } from '../../utils/requests';
import { Layout, Results } from '../../components';

export default function SearchPage({ data }) {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?term=${term}`);
    setTerm('');
  };

  return (
    <Layout title={`Search ${router.query.term || ''}`}>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-4 sm:flex-row justify-center gap-3"
        >
          <input
            className="p-2 rounded-3xl text-black"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search movies / shows"
          />
          <input
            className="font-semibold rounded-full px-4 py-2 bg-transparent border-2 cursor-pointer hover:bg-hulu hover:text-richBlack"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <Results data={data} />
    </Layout>
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
