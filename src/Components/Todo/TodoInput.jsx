import React,{useState} from 'react'

const TodoInput = ({handleAddTodo}) => {
    const [taskName,setTaskName] = useState("");
    
    return (
        <>
    <input type="text" value={taskName} placeholder="enter todo" 
      onChange={(e) => setTaskName(e.target.value)} />  
    <button onClick={() => handleAddTodo(taskName)}>Add todo</button>
        </>
    )
}

export default TodoInput
