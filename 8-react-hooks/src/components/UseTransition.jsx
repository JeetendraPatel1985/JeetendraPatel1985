
import {
    useTransition
} from "react";

function generateTodos() {
    const todos = [];
    for (let i = 0; i < 20000; i++) {
        todos.push({ id: i, text: `${i}-todo` });
    }
    return todos;
}

import { useState } from "react";


function UseTransition() {

    const [search, setSearch] = useState("");
    const [todos, setTodos] = useState(generateTodos);
    const [filteredTodos, setFilteredTodos] = useState(todos);

    const [isPending, startTransition] = useTransition();

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        console.log("searching for", searchTerm);
        setSearch(searchTerm); // state-change-1 // priority - high
        startTransition(() => {
            const filtered = todos.filter(todo => todo.text.includes(searchTerm));
            setFilteredTodos(filtered); // state-change-2 - priority - low
        });
    }

    return (
        <div>
            <h1>UseTransition</h1>
            <hr />
            <input value={search} onChange={handleSearch} className="form-control" placeholder="search todos" />
            <hr />
            {isPending && <h2>Loading...</h2>}
            <hr />
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default UseTransition;