
// todo = { id, title, completed }
// todos = [todo, todo, todo, ...]

// use-case(s)
//---------------------
// 1. add a todo
// 2. edit a todo
// 3. delete a todo
// 4. toggle a todo (completed / not completed)
// 5. toggle all todos (completed / not completed)
// 6. clear all completed todos
// 7. filter todos (all / active / completed)

let todos = []
function addTodo(title) {
    let newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false
    }
    todos = [...todos, newTodo]
}
function editTodo(id, newTitle) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, title: newTitle }
        }
        return todo;
    })
}
function toogleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed }
        }
        return todo;
    })
}
function toggleAll() {
    const areAllCompleted = todos.every(todo => todo.completed)
    todos = todos.map(todo => {
        return { ...todo, completed: !areAllCompleted }
    })
}
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id)
}
function clearCompeted() {
    todos = todos.filter(todo => !todo.completed)
}
function viewTodos(filter = 'ALL') {
    if (filter === "ALL") {
        todos.forEach(todo => {
            console.log(todo)
        })
    }
}
addTodo("Learn Jacascript")
addTodo("Learn React")
editTodo(2, "Learn React.js")
viewTodos('ALL')