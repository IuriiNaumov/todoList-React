import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (Array.isArray(todos)) {
            for (let i = 0; i < todos.length; i++) {
                todos[i].date = new Date(todos[i].date);
            }
            setTodos(todos);
        }
    }, []);

    const AddTodoHandler = (element) => {
        setTodos((prev) => {
            localStorage.setItem("todos", JSON.stringify([element, ...prev]));
            return [element, ...prev];
        });
    };

    const RemoveTodoHandler = (id) => {
        setTodos((prev) => {
            const newState = prev.filter((todo) => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <div className="fixed-container">
            <TodoList todos={todos} onRemoveTodo={RemoveTodoHandler} onNewTodo={AddTodoHandler} />
        </div>
    );
}
export default App;
