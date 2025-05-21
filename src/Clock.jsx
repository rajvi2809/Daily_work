import { useEffect, useState } from "react"

const Clock = ({color}) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)
    }, [])
    return (
        <div style={{backgroundColor:color,width:"170px",padding:"2px",margin:"5px"}}>
            <h1>{time}</h1>
        </div>
    )
}

export default Clock;