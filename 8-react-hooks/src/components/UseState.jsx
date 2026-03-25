
import { useState } from 'react'

function fetchTodos() {
    console.log('fetching todos...')
    return [
        'Todo 1',
        'Todo 2',
        'Todo 3'
    ]
}

function UseState() {

    console.log('UseState component rendered')
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState(() => {
        console.log('Initializing todos state')
        return fetchTodos()
    })
    const [user, setUser] = useState({
        name: 'John Doe',
        age: 30
    })

    // Golden-Rule : hooks must not be called inside loops, conditions or nested functions
    // Hooks must be called at the top level of the component, before any early returns



    const handleCountChange = () => {
        setCount(prevState => prevState + 1)
    }
    const handleCountThreeTimesChange = () => {
        // setCount(count + 1) // async..
        // setCount(count + 1)
        // setCount(count + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
    }

    const handleNewTodo = () => {
        const newTodo = `Todo ${todos.length + 1}`
        setTodos(prevTodos => [...prevTodos, newTodo])
    }
    const handleNameChange = () => {
        setUser(prevUser => ({ ...prevUser, name: 'Jane Doe' }))
    }
    const handleAgeChange = () => {
        setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 }))
    }



    return (
        <div>
            <h1>useState hook</h1>
            <hr />
            <p>Count: {count}</p>
            <button onClick={handleCountChange}>Increment</button>
            <button onClick={handleCountThreeTimesChange}>Increment Count 3 times</button>
            <hr />

            <h2>Todos</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <button onClick={() => handleNewTodo()}>
                Add Todo
            </button>
            <hr />
            <h2>User</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={handleNameChange}>change name</button>
            <button onClick={handleAgeChange}>change age</button>
        </div >
    )
}

export default UseState