import React, { useState, useEffect } from 'react'

function HookCounterFive() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        console.log("useeffect")
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <h1>useEffect Hook Counter</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounterFive