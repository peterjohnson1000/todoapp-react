import { useReducer } from "react";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContext } from './Context/TodoContext';
import todoReducer from './Context/reducer';

const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value = {{todos,dispatch}}>
      <Container fluid>
        <h1>Peter Johndon</h1>
      </Container>
    </TodoContext.Provider>
  );
}


export default App;

























// import React, {useState} from 'react';
// import './App.css';
// import Input from './components/Input';
// import Todolist from './components/Todolist';

// function App() {
//   const [inputText, setInputText] = useState("");
//   const [todos, setTodos] = useState([]);
//   return (
//     <div className = "container">
//       <header>
//         <h1>Peter's Todo List</h1>
//       </header>
//       <Input inputText = {inputText} setInputText = {setInputText} todos = {todos} setTodos = {setTodos} />
//       <Todolist setTodos = {setTodos} todos = {todos}/>
//     </div>
    
//   );
// }

// export default App;