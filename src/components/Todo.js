const Todo = ({todoName, setTodos, todos}) => {
    const strikeTodoHandler = () => {
        // need to delete a todo.strikethrough rewing from 50:11
        console.log(todos);
    }

    return (
        <div className = "todo">
            <li className = "newTodo">
                {todoName}
            </li>
            <button onClick = {strikeTodoHandler} className = "complete-btn">S</button>
            <button className = "trash-btn">X</button>
        </div>
    )
};

export default Todo;