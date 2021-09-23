import React,{ useState} from 'react'
import TodoList from "./TodoList"
import TodoInput from "./TodoInput"
import {v4 as uuid} from "uuid"

const Todo = () => {
    const [data,setData] = useState([])
    const [completed,setCompleted] = useState(false)

    const handleAdd = (title) => {
        const payload = {
            title,
            status:false,
            id:uuid()
        }
        setData([...data, payload])
    }
    const handleToggle = (id) => {
        var newdata = data.map((el) => {
            if(el.id === id){
                el.status = (!el.status)
            }
            return el;
        })
        setData(newdata);
    }
    const handleDelete = (id) => {
        var newdata = data.filter((el) => el.id !== id);
        setData(newdata);
    }
    const showCompleted = () => {
        setCompleted(!completed)
    }
    return (
        <>
        <div>
            <TodoInput onClick={handleAdd}/>
            {data.map((item)=>(
                <TodoList handleDelete = {handleDelete} handleToggle={handleToggle} 
                key = {item.id} {...item} />
            ))}
        </div>
            <button onClick={showCompleted} >Show Completed tasks</button>
                {completed ? data.filter((el) => el.status !== false).map((item) => {
            return <div>{item.title}</div>
        }) : null}
            </>
    )
}

export default Todo
