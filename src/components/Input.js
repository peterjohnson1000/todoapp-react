import { useState, useContext } from 'react';
import {v4} from 'uuid';
import { TodoContext } from '../Context/TodoContext';
import { ADD_TODO } from '../Context/action.type';

const Input = () => {

    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(TodoContext);

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(todoString === "") {
            return alert("Please enter an alert");
        }
        else {
            const todo = {
                name : todoString,
                id : v4()
            };

            dispatch({
                type: ADD_TODO,
                payload : todo
            });

            setTodoString("");
        }
    }

    return (
        <div>
            <input value = {todoString} onChange = { (e) => setTodoString(e.target.value)} type="text" className = "todo-input"/>
            <button onClick = {submitTodoHandler} className = "todo-button">+</button>
        </div>
    )
};

export default Input;