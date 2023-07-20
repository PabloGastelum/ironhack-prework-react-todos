const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const todos = await response.json()
    return todos.slice(0, 9).map(todo => todo.title)
}

export default getTodos;
