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

    return (
        <div className="w-full h-full flex flex-col items-center mx-auto pt-5 pb-32 bg-primary-tan shadow-lg background-blur-lg">
            <iframe
                ref={ref}
                width="900"
                height="600"
                src="https://www.youtube.com/embed/J5_HmfZyhKo?autoplay=1"
                title="YouTube video player"
                onLoad={loadIFrame}
            ></iframe>
            <div className="flex flex-col items-left pt-7"></div> 
        </div>
    )
}
//i want the youtube name 