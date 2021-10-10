import { ADD_TODO,UPDATE_TODO,DELETE_TODO } from "./types";


export const addTodo = (message) => ({
    type:ADD_TODO,
    message,
    id:Math.random(),
});

export const deleteTodo = (id) => ({
    type:DELETE_TODO,
    id,
});

export const updateTodo = ({id,message}) => ({
    type:UPDATE_TODO,
    id,
    message,
});