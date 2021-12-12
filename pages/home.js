import Head from 'next/head';

function HomePage() {
  //this works style={{ backgroundImage: 'url("/header.jpg")' }}

  return (
    <div>
      <Head>
        <title>Stream TV and Movies Live and Online | Hulu</title>
      </Head>
      <header
        style={{ backgroundImage: 'url("/header.jpg")' }}
        className="bg-cover bg-right bg-no-repeat h-[740px] after:absolute after:top-0 after:w-full after:h-32 after:bg-header-shadow after:z-1 "
      >
        <nav className="flex justify-end p-5 z-10 relative">
          <button className="cursor-pointer uppercase font-bold text-white">
            Log In
          </button>
        </nav>
        <div className=" flex flex-col justify-between h-[678px]">
          <div className="flex flex-col text-xl items-center mt-4 ">
            <h4 className="uppercase ">bundle with any hulu plan & save</h4>
            <div className="w-1/2">
              <img src="/logos.png" />
            </div>
            <div className="font-bold text-2xl p-4  text-center">
              Get endless entertainment, live sports, and the shows and movies
              you love.
            </div>
            <button className="uppercase bg-white text-gray-900 p-4 px-6 rounded-lg">
              get the disney bundle
            </button>
            <p className="text-sm p-6">See details and bundle terms</p>
          </div>
          <div className=" h-40 bg-black/50 flex justify-evenly items-center">
            <div className="w-40">
              <img src="/logo.png" className="h-12" />
            </div>
            <div className="text-center w-96 ">
              <p className="uppercase py-1">try up to one month free</p>
              <p className="text-3xl">
                Here just for Hulu? Get thousands of TV shows and movies.
              </p>
            </div>
            <div className="w-40">
              <button className="uppercase border-2 rounded-sm px-4">
                start your free trial
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
