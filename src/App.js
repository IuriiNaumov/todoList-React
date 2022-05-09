import TodoList from './TodoList';
import {useState} from 'react';
import './App.css';

const date = new Date();
const INITIAL_TODOS = [
  {
    id: 't1',
    title: 'Позвонить Маме',
    date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
  },
  {
    id: 't2',
    title: 'Макеты',
    date: `${date.getDate()}. ${date.getMonth()}. ${date.getFullYear()}`,
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
  <div className="fixed-container">
    <TodoList todos = {todos} onRemoveTodo={RemoveTodoHandler} onNewTodo={AddTodoHandler}/>
  </div>  
  );
}
export default App;
