import { useState, useCallback } from "react"



function UseCallback() {
    console.log("UseCallback component rendered")

    const [count, setCount] = useState(0)
    const handleIncrementCallback = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div>
            <h1>useCallback</h1>
            <hr />
            <h2>Count: {count}</h2>
            <button className="btn btn-primary" onClick={handleIncrementCallback}>Increment</button>
        </div>
    )
}

export default UseCallback