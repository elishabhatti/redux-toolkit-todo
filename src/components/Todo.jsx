import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Todo List</h2>
        
    </div>
  )
}

export default Todo