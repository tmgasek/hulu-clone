import requests from '../utils/requests';
import { useRouter } from 'next/router';

//TODO: change key to title and make it work - string work? atm its genre=fetchAction, not good

function Navbar() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-lg whitespace-nowrap space-x-8 sm:space-x-14 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:test-white active:text-red-500"
            onClick={() => router.push(`/?genre=${key}&page=1`)}
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default Navbar;
