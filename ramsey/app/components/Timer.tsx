import React, { useEffect, useState } from "react";
import axios from 'axios';

interface TimerProps {
    url: string,
    time: number
}
export default function Timer({ url, time }: TimerProps) {
    const [timers, setTimers] = useState<{ timestamp: number, timer_duration: string }[]>([]);
    const [triggered, setTrigger] = useState(false);
    useEffect(() => {
        axios.get(`http://10.37.118.181:8080/api/video?url=${url}`).then((response) => {
            setTimers(response.data)
        });
    }, []);

    useEffect(() => {
        for (const timer of timers) {
            console.log(Math.round(timer.timestamp), Math.round(time))
            if (Math.round(timer.timestamp) === Math.round(time)) {
                setTrigger(true);
                // Trigger some audio change
                setTimeout(() => {
                    setTrigger(false);
                }, 5000);
            }
        }
    }, [time])

    return (
        <div>
            {
                triggered ?
                    <div className="w-[2rem] h-[2rem] bg-green-300 rounded-full">
                    </div>
                    :
                    <div className="w-[2rem] h-[2rem] bg-red-300 rounded-full">
                    </div>
            }
        </div>
    )
}