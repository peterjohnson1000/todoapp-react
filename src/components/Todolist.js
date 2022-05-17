import Todo from './Todo';

const Todolist = ({todos, setTodos}) => {
    return (
        <div className = "todo-container">
            <ul className = "todo-list">
                {todos.map(todo => (
                    <Todo todos = {todos} setTodos = {setTodos} key = {todo.id} todoName = {todo.text} />
                ))}
            </ul>
        </div>
    )
};

export default Todolist;