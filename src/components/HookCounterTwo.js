import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            <h1>useState Hook Counter with Previous State</h1>
            Count:- {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevstate => prevstate + 1)}>Increment</button>
            <button onClick={() => setCount(prevstate => prevstate - 1)}>Decrement</button>
        </div>
    )
}

export default HookCounterTwo