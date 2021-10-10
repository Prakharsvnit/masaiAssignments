import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteTodo} from "../../actions"

const TodoItem = ({task}) => {
    const dispatch = useDispatch();
    const handleClick = (e) => e.target.classList.toggle("strikeThrough");
    return (
        <div>
            <p onClick={handleClick}>{task.task}</p>
            <button onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>
        </div>
    )
}

export default TodoItem
