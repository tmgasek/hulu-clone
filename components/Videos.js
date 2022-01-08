import YoutubeEmbed from './YoutubeEmbed';

const Videos = ({ videos }) => {
  return (
    <div>
      <h1 className="tracking-wider text-2xl my-4">Trailers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        {videos.map((v) => (
          <div key={v.key}>
            <YoutubeEmbed embedId={v.key} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
