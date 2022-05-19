import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count => count + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])
    return (
        <div>
            <h1>useEffect Interval Hook Counter</h1>
            {count}
        </div>
    )
}

export default IntervalHookCounter