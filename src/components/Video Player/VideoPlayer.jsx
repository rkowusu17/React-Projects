import React, { useRef } from "react";
import "./vidplayer.css";
import video from "../../assets/college-video.mp4";
import { useState } from "react";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      ref={player}
      className={`video-player ${playState ? "" : "hide"}`}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
