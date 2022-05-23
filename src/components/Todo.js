import { useContext } from 'react';
import { TodoContext } from '../Context/TodoContext';
import { REMOVE_TODO } from '../Context/action.type';

const Todo = ({todoName, todoId}) => {

    const {dispatch} = useContext(TodoContext);

    return (
        <div className = "todo">
            <li className = "newTodo">
                {todoName}
            </li>
            {/* <button onClick = {strikeTodoHandler} className = "complete-btn">S</button> */}
            <button onClick = { () => { 
                dispatch({
                    type : REMOVE_TODO,
                    payload : todoId
                }) }} className = "trash-btn">X</button>
        </div>
    )
};

export default Todo;