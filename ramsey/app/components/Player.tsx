import { useEffect, useRef } from "react"


export default function Player() {
    const ref = useRef<HTMLIFrameElement>(null);

    function loadIFrame(e) {
        // console.log(e.target.play())
        // console.log(e.target.contentWindow.document)
        // console.log(e)
    }

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