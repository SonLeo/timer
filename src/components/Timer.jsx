import { useState, useEffect } from "react"

function Timer() {
    const [countDown, setCountDown] = useState(10)

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown((prevCount) => prevCount - 1)
        }, 1000)

        if (countDown === 0) {
            clearInterval(interval)
            alert("Time up!")
        }

        return () => {
            clearInterval(interval)
        }
    }, [countDown])

    return (
        <div>
            <h1>Countdown: {countDown}</h1>
        </div>
    )
}

export default Timer