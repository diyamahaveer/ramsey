import { useEffect, useRef, useState } from "react"

export default function Player() {
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log(window.YT)
    }, [])
    return (
        <div>
            <div className="w-full flex flex-col items-center mx-auto pt-40">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/J5_HmfZyhKo?autoplay=1&start=${state}`}
                    title="YouTube video player"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
                ></iframe>
            </div >
            <button onClick={() => { setState(40) }}>
                press
            </button>
        </div>
    )
}
