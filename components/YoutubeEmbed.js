import React from 'react';

const YoutubeEmbed = ({ embedId }) => (
  <div>
    <iframe
      className="w-full h-[250px] sm:h-[400px] md:h-[300px] lg:h-[400px] 2xl:h-[500px]"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
