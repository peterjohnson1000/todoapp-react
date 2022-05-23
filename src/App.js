import { useReducer } from "react";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContext } from './Context/TodoContext';
import todoReducer from './Context/reducer';
import Input from './components/Input';
import Todolist from './components/Todolist';

const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value = {{todos,dispatch}}>
      <Container fluid>
        <h1>Peter johnson</h1>
        <Input /> 
        <Todolist />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;