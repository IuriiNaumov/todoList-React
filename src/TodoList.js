import "./TodoList.css";
import TodoListElement from "./TodoListElement";
import todo from "./images/todo.png";
export default TodoList;

function TodoList(props) {
    return (
        <div id="todo-list">
            <div className="todoLogo">
                <img src={todo} alt="Todo"></img>
                <h2>Todo list</h2>
            </div>
            <div className="todos">
                {props.todos.length ? (
                    props.todos.map((todo) => (
                        <TodoListElement id={todo.id} key={todo.id} title={todo.title} content={todo.content} onRemoveTodo={props.onRemoveTodo} />
                    ))
                ) : (
                    <div id="epmtyList">Список пуст...</div>
                )}
            </div>
        </div>
    );
}

//
