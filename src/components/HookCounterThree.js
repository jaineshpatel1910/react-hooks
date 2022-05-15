import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstName: "", lastName: "" })
    return (
        <div>
            <h1>useState Hook Counter with Object</h1>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}
                />
                <h3>Your first name is - {name.firstName}</h3>
                <h3>Your last name is - {name.lastName}</h3>
                {JSON.stringify(name)}
            </form>
        </div>
    )
}

export default HookCounterThree