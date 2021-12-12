import Head from 'next/head';

function HomePage() {
  //this works style={{ backgroundImage: 'url("/header.jpg")' }}

  return (
    <div className="text-white">
      <Head>
        <title>Stream TV and Movies Live and Online | Hulu</title>
      </Head>
      <header className="bg-headerSm md:bg-headerMd bg-cover bg-right bg-no-repeat after:absolute after:top-0 after:w-full after:h-32 after:bg-header-shadow after:z-1 ">
        <nav className="flex justify-end p-5 z-10 relative">
          <button className="cursor-pointer uppercase font-bold ">
            Log In
          </button>
        </nav>

        <div className=" flex flex-col justify-between h-auto">
          <div className="flex flex-col text-xl items-center mt-4 ">
            <h4 className="uppercase py-2 font-bold tracking-widest text-sm text-hulu ">
              bundle with any hulu plan & save
            </h4>
            <div className="w-1/2">
              <img src="/logos.png" />
            </div>
            <div className="font-extrabold  text-2xl p-4  text-center">
              Get endless entertainment, live sports, and the shows and movies
              you love.
            </div>
            <button className="uppercase bg-white text-black p-4 px-8 rounded-lg font-semibold text-sm tracking-widest mt-4">
              get the disney bundle
            </button>
            <p className="text-sm p-6">See details and bundle terms</p>
          </div>
          <div className="p-4  bg-black/50 flex flex-col gap-6 md:gap-0 md:flex-row justify-evenly items-center ">
            <div className="w-60 ">
              <img src="/logo.png" className="h-12 m-auto" />
            </div>
            <div className="text-center max-w-xl ">
              <p className="uppercase py-2 font-bold tracking-widest text-sm text-hulu ">
                try up to one month free
              </p>
              <p className="text-sm md:text-2xl">
                Here just for Hulu? Get thousands of TV shows and movies.
              </p>
            </div>
            <div className="w-auto">
              <button className="uppercase border-2 rounded-lg p-4 px-6">
                start your free trial
              </button>
            </div>
          </div>
        </div>
      </header>
      <section>hello</section>
    </div>
  );
}

export default HomePage;
