import React, {useState} from "react"
function Stopwatch(){
    const [start,isStart] = useState(false)
    const [time,setTime] = useState(0)
    const[intervalId,setIntervalId] = useState(-1)
    const formatTime = (time) => {
        const minutes = Math.floor(time/60)
        const seconds = time%60
        return `${minutes}:${seconds < 10 ? "0":""}${seconds}`
    }
    const startTimer =() => {
        isStart(true)
        setIntervalId(setInterval(()=>{
            setTime((t)=>t+1)
        },1000))
    }
    const stopTimer =()=> {
        isStart(false)
        clearInterval(intervalId)
    }
    const handleReset = () => {
        setTime(0)
        clearInterval(intervalId)
        setIntervalId(-1)
        isStart(false)
    }
    return(
        <div style={{paddingLeft:"15px"}}>
            <h1 style={{fontFamily:"serif"}}>Stopwatch</h1>
            <p style={{fontFamily:"serif"}}>Time: {formatTime(time)} </p>
            {!start && <button onClick={startTimer}>Start</button>}
            {start && <button onClick={stopTimer}>Stop</button>}
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Stopwatch;