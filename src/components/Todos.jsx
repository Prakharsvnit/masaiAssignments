import React, { useState } from "react";

const Todos = () => {
    const [text,setText] = useState("")
    const [todosList,setTodosList] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleClick = (e) => {
        const payload = {status:false,title:text}
        setTodosList([...todosList,payload])
        setText("");
    }

return <div>
    <input value={text} onChange={handleChange} type="text" placeholder="add task" />
    <button onClick={handleClick}>Add</button>
    {todosList.map((e) => (
        <div>{e.title} = status:{`${e.status ? 'done' : 'not done'}`}</div>
    ))}
</div>
}

export {Todos};