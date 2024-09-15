"use client";
import React, { useEffect, useState } from "react";
import { usePorcupine } from "@picovoice/porcupine-react";
import axios, { AxiosResponse } from "axios";

const LISTEN_WAIT_SEC = 2000;
export default function VoiceWidget({ callback }) {
    const {
        keywordDetection,
        isLoaded,
        isListening,
        // error,
        init, //,
        start,
        stop,
        // release,
    } = usePorcupine();
    // const [permission, setPermission] = useState(false);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [dataBuffer, setDataBuffer] = useState<Blob | null>(null);

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                // setPermission(true);
                setStream(streamData);
            } catch (err) { }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const porcupineKeyword = {
        publicPath: "./Ramsey_en_wasm_v3_0_0.ppn",
        label: "Ramsey", // An arbitrary string used to identify the keyword once the detection occurs.
    };
    const porcupineModel = { publicPath: "./porcupine_params.pv" };

    useEffect(() => {
        init(
            "H9gqpO7YPgWItO/o2BqEqY20Rn9EFZwfgEXsva1ygQ/hmzHpPcdJoQ==",
            porcupineKeyword,
            porcupineModel
        );
        getMicrophonePermission();
    }, []);

    function handleDataAvailable(this: MediaRecorder, ev: BlobEvent) {
        setDataBuffer(ev.data);
    }

    useEffect(() => {
        if (keywordDetection !== null) {
            // ... use keyword detection result
            console.log("Ramsey was called");
            const options = { mimeType: "audio/webm" };

            const mediaRecorder = new MediaRecorder(stream!, options);
            mediaRecorder.ondataavailable = handleDataAvailable;
            mediaRecorder.start();
            setTimeout(async () => {
                mediaRecorder.stop();
                const audioTracks = stream!.getAudioTracks();
                for (let i = 0; i <= audioTracks.length - 2; i++) {
                    stream!.removeTrack(audioTracks![i]);
                }
            }, LISTEN_WAIT_SEC);
            // mediaRecorder.
        }
    }, [keywordDetection]);

    useEffect(() => {
        if (dataBuffer) {
            axios.post("http://10.37.118.181:8080/api/audio/", dataBuffer!, {
                headers: {
                    "Content-Type": "application/octet-stream",
                    "Content-Length": JSON.stringify(dataBuffer!).length,
                },
            }).then((response: AxiosResponse) => {
                const data = response.data;
                console.log(data);
                callback(JSON.parse(data.response));
            });
            setDataBuffer(null);
        }
    }, [dataBuffer]);

    if (isLoaded && !isListening) {
        start();
    }

    return (
        <div>
        </div>
    );
}
