import React, { useEffect, useState } from 'react'
import getTodos from "./fetchTodos";

const INITIAL_STATE = ['Ir por despenza', 'Pagar el internet', 'Sacar a pasear al bruno']

const TodoList = () => {
    const [todos, setTodos] = useState(INITIAL_STATE)
    const [newTodo, setNewTodo] = useState("")

    useEffect(() => {
        getTodos().then(setTodos)
    }, [])

    useEffect(() => {
        console.log("updated to-dos")
    }, [todos])

    const handleChangeTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const onAddTodoClick = () => {
        if (newTodo === "") return
        setTodos(currentTodos => [...currentTodos, newTodo])
        setNewTodo("")
    }

    return (
        <>
            <input id="new-todo" placeholder='Nueva tarea...' value={newTodo} onChange={handleChangeTodo} />
            <button type='button' onClick={onAddTodoClick}>Agregar tarea</button>
            <ul>
                {todos.map((task, index) => (
                    <li key={`${task}-${index}`}>
                        {task}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
