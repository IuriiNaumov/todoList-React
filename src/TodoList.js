import TodoListElement from "./TodoListElement";
import NewTodoForm from "./NewTodoForm";
import { useState } from "react";
export default TodoList;

function TodoList(props) {
    const[openedForm, setOpenedForm] = useState(false)

    const openFormHandler = () => {
        setOpenedForm(true);
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
            <div className="openFormButton" onClick={openFormHandler}>
                <button>
                    New task
                </button>
            </div>
            {openedForm && <NewTodoForm onNewTodo={props.onNewTodo} onCloseForm={() => setOpenedForm(false)} />}
        </div>
    );
}

//
