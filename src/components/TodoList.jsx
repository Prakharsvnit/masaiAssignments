import React from 'react'


const TodoList = ({title,id,status,handleToggle,handleDelete}) => {
    return (
        <>
        <div onClick={() => handleToggle(id)}>
            <div style={status ? {textDecoration:"line-through"}:{textDecoration:"none"}}>{title}</div>
        </div>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </>
    )
}

export default TodoList
