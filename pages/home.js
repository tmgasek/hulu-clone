import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import BiggestEvents from '../components/BiggestEvents';
import BreakingNews from '../components/BreakingNews';
import LiveSports from '../components/LiveSports';

function HomePage() {
  const [currCover, setCurrCover] = useState('sports');
  //this works style={{ backgroundImage: 'url("/header.jpg")' }}

  // const switchCovers = (selection) => {
  //   if (selection === 'sports') {
  //     setCurrCover('/live-sports.jpg');
  //   }
  //   if (selection === 'news') {
  //     setCurrCover('/breaking-news.jpg');
  //   }
  //   if (selection === 'events') {
  //     setCurrCover('/biggest-events.jpg');
  //   }
  // };

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

        <div className=" flex flex-col justify-between h-auto  ">
          <div className="flex flex-col text-xl items-center mt-4 ">
            <h4 className="uppercase mt-20 font-bold tracking-widest text-hulu ">
              bundle with any hulu plan & save
            </h4>
            <div className="w-1/2">
              <img src="/logos.png" />
            </div>
            <div className="font-extrabold  text-2xl p-4 max-w-2xl py-10 text-center">
              Get endless entertainment, live sports, and the shows and movies
              you love.
            </div>
            <Link href={'/'}>
              <button className="uppercase bg-white text-black p-4 px-10 rounded-lg font-semibold text-xl tracking-wider mt-4">
                ENTER SITE
              </button>
            </Link>

            <p className="text-sm p-6">See details and bundle terms</p>
          </div>
          <div className="p-4  bg-black/50 flex flex-col gap-6 md:gap-0 md:flex-row justify-evenly items-center ">
            <div className="w-60 ">
              <img src="/logo.png" className="h-12 m-auto" />
            </div>
            <div className="text-center max-w-xl">
              <p className="uppercase py-2 font-bold tracking-widest text-sm text-hulu ">
                try up to one month free
              </p>
              <p className="text-sm md:text-2xl max-w-xs">
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

      <section className="bg-black py-20">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="uppercase py-2 font-bold tracking-widest text-sm text-hulu">
            included in all plans
          </p>
          <h2 className="text-3xl md:text-7xl font-black mb-4">
            All The TV You Love
          </h2>
          <p className="text-xl m-1 md:text-2xl max-w-4xl text-center">
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center pt-8 ">
          <div className="relative">
            <img src="/cover-1.jpg" className="h-72 md:h-[450px]" />
            <div className="absolute top-0 left-0 h-full w-full bg-card-shadow p-5">
              <p>Past & Current Seasons</p>
              <h3 className="font-bold text-2xl">TV Shows</h3>
            </div>
          </div>
          <div className="relative">
            <img src="/cover-2.jpg" className="h-72 md:h-[450px]" />
            <div className="absolute top-0 left-0 h-full w-full bg-card-shadow p-5">
              <p>New & Classic</p>
              <h3 className="font-bold text-2xl">Movies</h3>
            </div>
          </div>
          <div className="relative">
            <img src="/cover-3.jpg" className="h-72 md:h-[450px]" />
            <div className="absolute top-0 left-0 h-full w-full bg-card-shadow p-5">
              <p>Groundbreaking</p>
              <h3 className="font-bold text-2xl">Hulu Originals</h3>
            </div>
          </div>
          <div className="relative">
            <img src="/cover-4.jpg" className="h-72 md:h-[450px]" />
            <div className="absolute top-0 left-0 h-full w-full bg-card-shadow p-5">
              <p>Add-on</p>
              <h3 className="font-bold text-2xl">Premiums</h3>
            </div>
            <p className=" text-[10px] text-center mt-2 max-w-[200px] md:max-w-max">
              Premium network add-ons available for an additional cost
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-[#151516] py-10 md:py-20 text-center">
        <div className="flex flex-col gap-5 justify-center items-center m-2">
          <p className="uppercase py-2 font-bold tracking-widest text-sm text-hulu ">
            hulu + live tv
          </p>
          <h2 className="text-3xl md:text-7xl font-black">
            Live TV Makes It Better
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl">
            Make the switch from cable. Get 75+ top channels with your favorite
            live sports, news, and events - plus the entire Hulu streaming
            library.
          </p>
          <p className="text-xs text-gray-400">
            Price will increase to $69.99/month on 12/21/2021. Regional
            restrictions, blackouts and additional terms apply.
          </p>
          <p className="underline">VIEW CHANNELS IN YOUR AREA →</p>
        </div>
      </section>

      {/* DYNAMIC OPTIONS BUT IT LAGS ON SWITCH FIRST TIME.  */}

      {/* className={`h-[800px] ${    
            currCover === 'sports' ? 'bg-sportsSm md:bg-sportsMd' : ''
          }${currCover === 'news' ? 'bg-newsSm md:bg-newsMd' : ''}
          ${currCover === 'events' ? 'bg-eventsSm md:bg-eventsMd' : ''} */}

      <section className="relative">
        {currCover === 'sports' && <LiveSports setCurrCover={setCurrCover} />}
        {currCover === 'news' && <BreakingNews setCurrCover={setCurrCover} />}
        {currCover === 'events' && (
          <BiggestEvents setCurrCover={setCurrCover} />
        )}
      </section>

      <section className="bg-white h-[1000px] text-[#292C33]">
        <div className="flex flex-col justify-center items-center py-20">
          <h2 className="text-7xl font-black">Select Your Plan</h2>
          <p className="text-2xl">
            No hidden fees, equipment rentals, or installation appointments.
          </p>
          <p className="text-2xl font-black">
            Switch plans or cancel anytime. ^^
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
