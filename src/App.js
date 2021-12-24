import React, {  useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodosCreatePage from './components/TodosCreatePage/TodosCreatePage'
import EditTodo from './components/TodosEditPage/TodosEditPage'
import TodosPage from './components/TodosPage/TodosPage'
import initialData from './initialData'

export default function App() {

    const [todos, setTodos] = useState([])

    useEffect(()=> {

        //some initial data
        let data = initialData
        if(localStorage.data){
            data = JSON.parse(localStorage.data)
        }
        setTodos(data)
    },[])

    const addTodo = (id) => {
        localStorage.data = JSON.stringify([...todos,id])
        setTodos([...todos, id])
    }

    const deleteTodo = (id) => {
        const deleteIndex = todos.filter((todo, index) => {
            return index !== id
        })
        localStorage.data = JSON.stringify(deleteIndex)
        setTodos(deleteIndex)
    }

    const editStateTodo = (id, arg) => {
        todos[arg] = id
        localStorage.data = JSON.stringify(todos)
        setTodos(todos)
    }

    const mark = (index) => {
        const markTodo = [...todos]
        markTodo[index].done = !markTodo[index].done
        localStorage.data = JSON.stringify(markTodo)
        setTodos(markTodo)
    }



    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <TodosPage todos={todos} deleteTodo={deleteTodo} mark={mark} /> } />
                <Route path='/create' element={<TodosCreatePage addTodo={addTodo} />} />
                <Route path='/edit/:id' element={<EditTodo todos={todos} editStateTodo={editStateTodo} />} />
            </Routes>
        </BrowserRouter>
    )
}
