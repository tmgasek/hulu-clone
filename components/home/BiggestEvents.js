function BiggestEvents({ setCurrCover }) {
  return (
    <div
      className={`h-[800px] bg-eventsSm md:bg-eventsMd bg-cover bg-top bg-no-repeat after:absolute after:top-0 after:w-full after:h-full after:bg-card-shadow after:z-1`}
    >
      <div className="relative z-10 flex flex-col max-w-md p-5 md:justify-center md:mx-40">
        <div className="flex gap-5 mt-4 md:mt-48 mb-14 font-bold text-center">
          <div>
            <p onClick={() => setCurrCover('sports')} className="text-gray-400">
              LIVE SPORTS
            </p>
          </div>
          <div>
            <p onClick={() => setCurrCover('news')} className="text-gray-400">
              BREAKING NEWS
            </p>
          </div>
          <div>
            <p onClick={() => setCurrCover('events')}>BIGGEST EVENTS</p>
            <div className="border-2 mt-2"></div>
          </div>
        </div>
      </div>

      <div className="relative m-auto text-center md:text-left z-10 max-w-xl md:mx-44">
        <h1 className="text-3xl md:text-7xl font-black mb-6">Biggest Events</h1>
        <p className="text-xl md:text-2xl">
          Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®,
          Emmys®, and more.
        </p>
        <div className="mt-8 flex gap-8 flex-wrap justify-center md:justify-start">
          <div className="p-1 bg-white rounded-full w-12 h-12 flex justify-center items-center">
            <img src="/events-logo-1.png" />
          </div>
          <div className="p-1 bg-white rounded-full w-12 h-12 flex justify-center items-center">
            <img src="/events-logo-2.png" />
          </div>
          <div className="p-1 bg-white rounded-full w-12 h-12 flex justify-center items-center">
            <img src="/events-logo-3.png" />
          </div>
          <div className="p-1 bg-white rounded-full w-12 h-12 flex justify-center items-center">
            <img src="/events-logo-4.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiggestEvents;
