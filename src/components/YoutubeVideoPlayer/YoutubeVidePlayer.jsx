import React, { useState } from "react";

function YoutubeVidePlayer({ videoUri }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div>
      {isPlaying ? (
        <button onClick={handlePlay}>Play Video</button>
      ) : (
        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
          <iframe
            width={"1080"}
            height={"720"}
            src={"https://www.youtube.com/embed/8wmn7k1TTcI?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default YoutubeVidePlayer;
