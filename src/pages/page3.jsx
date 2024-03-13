import React, { useState, useRef } from "react";
import Aiday1 from "../images/3.png";

function Page3() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef(null);

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const stopPlayback = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="pages">
      <div>
        <img className="pageImg" src={Aiday1} alt="" />
      </div>
      <div>
        <h1 className="audioH1">ahmad</h1>
        <audio ref={audioPlayer} />
        <div>
          <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
          <button onClick={stopPlayback}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default Page3;
