import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import {useState} from 'react';
import './App.css';


const INITIAL_TODOS = [
  {
    id: 't1',
    title: 'Позвонить Маме',
    content: 'Напомнить купить кукурузу',
  },
  {
    id: 't2',
    title: 'Макеты',
    content: 'Посмотреть завтра макеты на Dribbble для этого чудесного приложения'
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
