import TodoListElement from "./TodoListElement";
import NewTodoForm from "./NewTodoForm";
import { useState } from "react";
export default TodoList;

function TodoList(props) {
    const[openedForm, setOpenedForm] = useState(false)

    const openFormHandler = () => {
        setOpenedForm(true);
        console.log('123')
    }
    const closeFormHandler = () => {
        setOpenedForm(false)
    }

    return (
        <div className="todoList">
            <h2>My tasks</h2>
            <div className="todos">
                {props.todos.length ? (
                    props.todos.map((todo) => (
                        <TodoListElement id={todo.id} key={todo.id} title={todo.title} date={todo.date} onRemoveTodo={props.onRemoveTodo} />
                    ))
                ) : (
                    <div>Список пуст...</div>
                )}
            </div>
            <div className="openFormButton">
                <button onClick={openFormHandler}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 0.75H5.75V5.75H0.75V8.25H5.75V13.25H8.25V8.25H13.25V5.75H8.25V0.75Z" fill="white" />
                    </svg>
                    New task
                </button>
            </div>
            {openedForm && <NewTodoForm onCloseForm={() => setOpenedForm(false)} />}
        </div>
    );
}

//
