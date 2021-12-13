function LiveSports() {
  return (
    <div className="relative m-auto text-center md:text-left z-10 max-w-xl md:mx-44">
      <h1 className="text-3xl md:text-7xl font-black mb-2">Live Sports</h1>
      <p className="text-xl md:text-2xl">
        Catch your games at home or on the go. Stream live games from major
        college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.
      </p>
      <div className="mt-6 flex gap-8 flex-wrap justify-center md:justify-start">
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
  );
}

export default LiveSports;
