import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import {useState} from 'react';
import './App.css';


const INITIAL_TODOS = [
  {
    id: 't1',
    title: 'Позвонить Маме',
    content: 'Купить лошать за 300 деняк',
  },
  {
    id: 't2',
    title: 'Нарезать ириски ',
    content: 'Острым ножом'
  }
];




function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const AddTodoHandler = element => {
    setTodos(prev => [element, ...prev]);
  }

  const RemoveTodoHandler = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }



  return (
  <div id="fixed-container">
    <TodoList todos = {todos} onRemoveTodo={RemoveTodoHandler}/>
    <NewTodoForm onNewTodo = {AddTodoHandler}/>
  </div>  
  );
}

export default App;
