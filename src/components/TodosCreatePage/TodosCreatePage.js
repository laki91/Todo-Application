import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './TodosCreatePage.css'

export default function TodosCreatePage({addTodo}) {

    const [createTodo, setCreateTodo] = useState({name: '', description: '', status: 'open'})
    const [errors, setErrors] = useState({nameErr:''})

    const navigate = useNavigate()

    const validate = (e) => {
        let nameErr = ''

        if(createTodo.name.trim() === '' || createTodo.name.trim() === null){
            nameErr = 'The Name field cannot be empty'
        }
        if(createTodo.name.trim().length > 0 && createTodo.name.trim().length < 3){
            nameErr= 'The Name must have minimum 3 caracters'
        }

        if(nameErr){
            setErrors({nameErr})
            return false
        }
        return true
    }

    const handleCreate = (e) => {
        e.preventDefault()

        const isValid = validate()
        if(isValid){
            addTodo(createTodo)
            navigate('/')
        }
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4' >
                        Create Todo
                        <span>
                            <Link to={'/'} className='btn btn-warning ms-4' >Cancel Todo</Link>
                        </span>
                    </h3>
                    <div className="row">
                        <form onSubmit={handleCreate} className='col-8 offset-3'>
                            <small id='smal' className='errorMsg'>
                                {errors.nameErr}
                            </small>
                            <input
                            onChange={e => setCreateTodo({...createTodo, name:e.target.value})}
                            type="text" placeholder='Add Name' 
                            className={`form-control ${errors.nameErr ? 'errorBorder' : '' } `} 
                            /><br />
                            <input
                            onChange={e => setCreateTodo({...createTodo, description:e.target.value})} 
                            type="text" placeholder='Add Description' 
                            className='form-control' 
                            /><br />
                            <button className='btn btn-info form-control'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
