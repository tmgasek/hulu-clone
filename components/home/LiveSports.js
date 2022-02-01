function LiveSports({ setCurrCover }) {
  return (
    <div
      className={`h-[800px] bg-sportsSm md:bg-sportsMd bg-cover bg-top bg-no-repeat after:absolute after:top-0 after:w-full after:h-full after:bg-card-shadow after:z-1`}
    >
      <div className="relative z-10 flex flex-col max-w-md p-5 md:justify-center md:mx-40">
        <div className="flex gap-5 mt-4 md:mt-48 mb-14 font-bold text-center">
          <div>
            <p onClick={() => setCurrCover('sports')}>LIVE SPORTS</p>
            <div className="border-2 mt-2"></div>
          </div>
          <div>
            <p
              onClick={() => setCurrCover('news')}
              className="text-gray-400 cursor-pointer"
            >
              BREAKING NEWS
            </p>
          </div>
          <div>
            <p
              onClick={() => setCurrCover('events')}
              className="text-gray-400  cursor-pointer"
            >
              BIGGEST EVENTS
            </p>
          </div>
        </div>
      </div>

      <div className="relative m-auto text-center md:text-left z-10 max-w-xl md:mx-44">
        <h1 className="text-3xl md:text-7xl font-black mb-6">Live Sports</h1>
        <p className="text-xl md:text-2xl">
          Catch your games at home or on the go. Stream live games from major
          college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.
        </p>
        <div className="mt-8 flex gap-8 flex-wrap justify-center md:justify-start">
          <div className="p-1 bg-white rounded-full w-12 h-12 flex justify-center items-center">
            <img src="/live-sports-logo-1.png" />
          </div>
          <div className="p-1 bg-white rounded-full w-12 h-12 flex justify-center items-center">
            <img src="/live-sports-logo-2.png" />
          </div>
          <div className="p-1 bg-white rounded-full w-12 h-12 flex justify-center items-center">
            <img src="/live-sports-logo-3.svg" />
          </div>
          <div className="p-1 bg-white rounded-full w-12 h-12 flex justify-center items-center">
            <img src="/live-sports-logo-4.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveSports;
