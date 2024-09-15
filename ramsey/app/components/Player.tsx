import { useEffect, useRef, useState } from "react";
import VoiceWidget from "./VoiceWidget";

let player;

window.onYouTubeIframeAPIReady = () => {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "M7lc1UVf-VE",
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: (event) => {
        event.target.playVideo();
      },
      // 'onStateChange': onPlayerStateChange
    },
  });
};

function callbackFunc(json) {
  if (json.action === "PAUSE") {
    player.pauseVideo();
    console.log("Pausing video");
  } else if (json.action === "PLAY") {
    player.playVideo();
  } else if (json.action === "REWIND") {
    player.seekTo(player.getCurrentTime() - json.seconds, true);
  } else if (json.action === "FORWARD") {
    player.seekTo(player.getCurrentTime() + json.seconds, true);
  } else {
    console.log("Neither, no action.");
  }
}

export default function Player() {
  // const [value, setValue] = useState(0);
  useEffect(() => {
    //     console.log("running use effect")
    let tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.id = "youtube_api";

    if (!document.getElementById("youtube_api")) {
      document.getElementById("player")?.insertAdjacentElement("afterend", tag);
    }
  }, []);

  // setTimeout(() => {
  //     player.seekTo(value * 5, true);
  //     setValue(value + 10)
  // }, 2000)
  return (
    <div>
      <div className="w-full flex flex-col items-center mx-auto pt-40">
        <div id="player"></div>
      </div>
      <VoiceWidget callback={callbackFunc}></VoiceWidget>
    </div>
  );
}
