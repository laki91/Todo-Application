import React, {  useState } from 'react'
import {  useParams } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'

export default function EditTodo({todos, editStateTodo}) {

    const { id } = useParams()
    const navigate = useNavigate()
    
    const [editTodo, setEditTodo] = useState(todos.filter((todo,index) => index.toString() === id)[0])
    const [errors, setErrors] = useState({nameErr:''})
    //console.log(editTodo);

    const validate = (e) => {
        let nameErr = ''

        if(editTodo.name.trim() === '' || editTodo.name.trim() === null ){
            nameErr = 'The Name field cannot be empty'
        }
        if(editTodo.name.trim().length > 0 && editTodo.name.trim().length < 3){
            nameErr= 'The Name must have minimum 3 caracters'
        }
        if(nameErr){
            setErrors({nameErr})
            return false
        }
        return true
    }
    

    const handleEdit = (e) => { 
        e.preventDefault()
        const isValid = validate()
        if(isValid){
            editStateTodo(editTodo, id)
            navigate('/')
        } 
    }

    return (
        <div className="continer">
            <div className="row">
                <div className="col-10 offset-1">
                <h3 className='display-4 m-4'>Create Todo
                <span><Link to={'/'} className='btn btn-warning ms-4'>Cancel Todo</Link></span>
                </h3>
                <div className="row">
                    <form onSubmit={handleEdit} className="col-8 offset-3">
                        <small id='smal' className='errorMsg'>
                            {errors.nameErr}
                        </small>
                        <input 
                            onChange={e => setEditTodo({...editTodo, name: e.target.value})} 
                            value={editTodo.name} className='form-control' 
                            type="text" placeholder='Edit Name*' 
                        />
                        <br />
                        <input 
                            onChange={e => setEditTodo({...editTodo, description: e.target.value})} 
                            value={editTodo.description} className='form-control' type="text" 
                            placeholder='Edit Description' 
                        />
                        <br />
                        <button className='btn btn-info form-control'>Edit</button>
                    </form>
                </div>             
                </div>
            </div>
        </div>
    )
}
