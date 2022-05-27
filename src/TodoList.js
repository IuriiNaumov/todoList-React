import TodoListElement from "./TodoListElement";
import NewTodoForm from "./NewTodoForm";
import { useState } from "react";
import menu from './images/menu.png'

function TodoList(props) {
    const [openedForm, setOpenedForm] = useState(false);

    const openFormHandler = () => {
        setOpenedForm(true);
    };

    return (
        <div className="x">
            <button className="openPanelButton" onClick={props.onOpenPanel}>
                <img src={menu}></img>
            </button>
            <div className="todoList">
                <h1>Todo list</h1>
                <div className="todos">
                    {props.todos.length ? (
                        props.todos.map((todo) => (
                            <TodoListElement
                                id={todo.id}
                                key={todo.id}
                                title={todo.title}
                                date={new Date(todo.date)}
                                hours={todo.hours}
                                minutes={todo.minutes}
                                option={todo.option}
                                onRemoveTodo={props.onRemoveTodo}
                            />
                        ))
                    ) : (
                        <div>Empty list...</div>
                    )}
                </div>
                <div className="openFormButton" onClick={openFormHandler}>
                    <button>New task</button>
                </div>
                {openedForm && <NewTodoForm onNewTodo={props.onNewTodo} onCloseForm={() => setOpenedForm(false)} />}
            </div>
        </div>
    );
}
export default TodoList;
