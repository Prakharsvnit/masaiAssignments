import React,{useState} from 'react'
import {v4 as uuid} from "uuid"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

const TodoApp = () => {
    const [TodoData,setTodoData] = useState([])
    const handleAddTodo = (task) => {
        const payload = {
            title: task,
            id: uuid(),
            status:false
        }
        setTodoData([...TodoData,payload])
    }
    return (
        <>
            <TodoInput handleAddTodo={handleAddTodo}/>
            {TodoData.map(item=>{
            return <TodoItem key={item.id} {...item} />
            })}
        </>
    );
};

export default TodoApp
