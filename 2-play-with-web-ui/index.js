

// using DOM api
//------------------

const greetBtn = document.querySelector('.btn-primary')
const cardBody = document.querySelector('.card-body')

greetBtn.addEventListener('click', (event) => {
    const currentTime = new Date().getHours()
    let greeting = ''
    if (currentTime < 12) {
        greeting = 'Good morning'
    } else if (currentTime < 18) {
        greeting = 'Good afternoon'
    } else {
        greeting = 'Good evening'
    }
    cardBody.textContent = greeting // DOM manipulation
})

// using DOM api + XHR/Fetch
//--------------------------
const top5TodosBtn = document.querySelector('#top5-todos-btn')
const progressMessage = document.querySelector('#progress-message')
const todosTableBody = document.querySelector('#todos-table-body')




// top5TodosBtn.addEventListener('click', (event) => {
//     const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', apiUrl, true)
//     xhr.send() // synchronous request, blocks the UI until response is received
//     progressMessage.textContent = 'Loading...'
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 const todos = JSON.parse(xhr.responseText)
//                 const todosRows = todos.map(todo => `
//                     <tr class="${todo.completed ? 'table-success' : 'table-danger'}">
//                         <td>${todo.id}</td>
//                         <td>${todo.title}</td>
//                         <td>${todo.completed ? 'Yes' : 'No'}</td>
//                     </tr>
//                 `)
//                 todosTableBody.innerHTML = todosRows.join('')
//                 progressMessage.textContent = ''
//             }
//         }
//     }
// })

top5TodosBtn.addEventListener('click', async (event) => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    progressMessage.textContent = 'Loading...'
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const todos = await response.json()
        const todosRows = todos.map(todo => `
            <tr class="${todo.completed ? 'table-success' : 'table-danger'}">
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed ? 'Yes' : 'No'}</td>
            </tr>
        `)
        todosTableBody.innerHTML = todosRows.join('')
    } catch (error) {
        console.error('Error fetching todos:', error)
        progressMessage.textContent = 'Failed to load todos.'
    } finally {
        progressMessage.textContent = ''
    }
})