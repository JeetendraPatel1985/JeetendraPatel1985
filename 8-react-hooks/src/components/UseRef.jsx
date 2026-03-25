import { useState, useRef, useEffect } from "react"

function Person(name, age) {
    this.name = name
    this.age = age
}


function UseRef() {
    console.log("UseRef component rendered")
    const [count, setCount] = useState(0)
    const personRef = useRef(new Person("John", 30))
    personRef.current.age += 1

    const inputRef = useRef()

    useEffect(() => {
        // console.log(inputRef.current)
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <h1>useRef</h1>
            <hr />
            <h2>Count: {count}</h2>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
            <hr />
            <h2>Person: {personRef.current.name} - {personRef.current.age}</h2>

            <hr />

            <input ref={inputRef} type="text" className="form-control" placeholder="Type something..." />

        </div>
    )
}

export default UseRef