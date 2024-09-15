import { useEffect, useRef } from "react"


export default function Player() {
    const ref = useRef<HTMLIFrameElement>(null);

    function loadIFrame(e) {
        // console.log(e.target.play())
        // console.log(e.target.contentWindow.document)
        // console.log(e)
    }

    return (
        <div className="w-full flex flex-col items-center mx-auto pt-40">
            <iframe
                ref={ref}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/J5_HmfZyhKo?autoplay=1"
                title="YouTube video player"
                onLoad={loadIFrame}
            ></iframe>
        </div>
    )
}
