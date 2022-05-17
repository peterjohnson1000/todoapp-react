import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';
import Todolist from './components/Todolist';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className = "container">
      <header>
        <h1>Peter's Todo List</h1>
      </header>
      <Input inputText = {inputText} setInputText = {setInputText} todos = {todos} setTodos = {setTodos} />
      <Todolist setTodos = {setTodos} todos = {todos}/>
    </div>
    
  );
}

export default App;