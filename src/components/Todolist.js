import { useContext } from 'react';
import { TodoContext } from '../Context/TodoContext';
import Todo from './Todo';

const Todolist = () => {

    const {todos} = useContext(TodoContext);

    return (
        <div className = "todo-container">
            <ul className = "todo-list">
                {todos.map( (todo) => (
                    <Todo todoName = {todo.name} todoId = {todo.id} key = {todo.id} />
                ))}
            </ul>
        </div>
    )
};

export default Todolist;