import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Todo.css'

export default function Todo({todo, index, deleteTodo, mark}) {

    const [isEnable, setIsEnable] = useState( todo.status === 'done' ? true : false  )

    const handleDone = () => {
        setIsEnable(true)
        todo.status = 'done'
        mark(index)
    }

    const handleMark = () => {
        setIsEnable(false)
        todo.status = 'open'
        mark(index)
    }

    return (
        <>
            <tr>
                <td>{index+1}</td>
                <td className={todo.status === 'done'  ? 'complete':'incomplete'}>{todo.name}</td>
                <td className={todo.status === 'done'  ? 'complete':'incomplete'} >{todo.description}</td>
                <td className={todo.status === 'done'  ? 'statusGreen':'StatusRed'} >{todo.status}</td>
                <td>
                    <button disabled={isEnable} onClick={()=>{deleteTodo(index)}} className='btn btn-danger btn-sm ms-4' >Delete</button>
                    <button disabled={isEnable} className='btn btn-warning btn-sm ms-4 edit'>
                        <Link to={'/edit/'+ index} className='edit' >Edit</Link>
                    </button>
                    {
                        todo.status === 'open' 
                        ? 
                        <button onClick={handleDone} id='done' className='btn btn-success btn-sm ms-4'>Done</button> 
                        :
                        <button onClick={handleMark}  id='undo' className='btn  btn-sm ms-4'>Undo</button>
                    }
                </td>
            </tr>
        </>
    )
}
