import { useEffect, useRef, useState } from "react";
import VoiceWidget from "./VoiceWidget";
import Timer from "./Timer";

let player;

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

export default function Player({ url }) {
    const [intervalObj, setIntervalObj] = useState(null);
    const [currentTime, setTime] = useState(0);
    const url_split = url.split("=");
    const id = url_split[url_split.length - 1];

    window.onYouTubeIframeAPIReady = () => {
        player = new YT.Player("player", {
            height: "390",
            width: "640",
            videoId: id,
            playerVars: {
                playsinline: 1,
            },
            events: {
                onReady: (event) => {
                    event.target.playVideo();
                }
            },
        });
    };

    useEffect(() => {
        //     console.log("running use effect")
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.id = "youtube_api";

        if (!document.getElementById("youtube_api")) {
            document.getElementById("player")?.insertAdjacentElement("afterend", tag);
        }

        setIntervalObj(setInterval(() => {
            setTime(player.getCurrentTime());
        }, 1000));
    }, []);

    return (
        <div className="relative">
            <div className="w-full flex flex-col items-center mx-auto pt-40">
                <div id="player"></div>
            </div>
            <VoiceWidget callback={callbackFunc}></VoiceWidget>
            <div className="absolute right-[27.5%]">
                <Timer url={url} time={currentTime} />
            </div>
        </div>
    );
}
//i want the youtube name 