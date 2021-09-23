import React,{useState} from 'react'

const TodoInput = ({onClick}) => {
    const [title,setTitle] = useState("") 
 
    return (
        <div>
            <input placeholder = "add todo" value = {title} 
            onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={() => onClick(title)}>Add</button>
        </div>
    )
}

export default TodoInput
