import React from 'react'
import { Link } from 'react-router-dom'
import Todo from '../Todo/Todo'

export default function TodosPage({ todos, deleteTodo, mark }) {

    const all = todos.map((todo, index) => {
        return (
            <Todo todo={todo} index={index} key={index} deleteTodo={deleteTodo} mark={mark} />
        )
    })


    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4' >
                        Todos List
                        <span><Link to='/create'  className='btn btn-info btn-lg ms-4' >Create Todo</Link></span>
                    </h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <div className="row">
                                <table className='table text-center'>
                                    <thead>
                                        <tr>
                                            {/* SN - Serial Number */}
                                            <th>SN</th> 
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {all}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
