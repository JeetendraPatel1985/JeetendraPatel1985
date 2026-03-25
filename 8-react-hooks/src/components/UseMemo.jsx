import { useState, useMemo, use } from "react"


// generate 1M numbers
function generateNumbers() {
    return new Array(10000).fill(0).map((_, i) => i + 1)
}

function UseMemo() {
    console.log("UseMemo rendered")
    const [count, setCount] = useState(0)
    const [category, setCategory] = useState("odd")
    const [numbers, setNumbers] = useState(generateNumbers)
    const filteredNumbers = useMemo(() => {
        console.log("Filtering numbers...")
        return numbers.filter(num => category === "odd" ? num % 2 !== 0 : num % 2 === 0)
    }, [category, numbers])
    return (
        <div>
            <h1>useMemo</h1>
            <hr />
            <h2>Count: {count}</h2>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
            <hr />
            <h2>Category: {category}</h2>
            <button className="btn btn-primary" onClick={() => setCategory(category === "odd" ? "even" : "odd")}>Toggle Category</button>
            <hr />
            <h2>Numbers:</h2>
            <ul>
                {filteredNumbers.map(num => <li key={num}>{num}</li>)}
            </ul>

        </div>
    )
}

export default UseMemo