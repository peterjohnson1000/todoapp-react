const Input = ({inputText, setInputText, todos, setTodos}) => {

    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text : inputText, completed : false, id : Math.random() * 1000}
        ]);
        console.log(todos);
        setInputText("");

    }

    return (
        <div>
            <input value = {inputText} onChange = {inputTextHandler} type="text" className = "todo-input"/>
            <button onClick = {submitTodoHandler} className = "todo-button">+</button>
        </div>
    )
};

export default Input;