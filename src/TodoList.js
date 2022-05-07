import TodoListElement from "./TodoListElement";
export default TodoList;

function TodoList(props) {
    return (
        <div id="todo-list">
            <div className="todoLogo">
                <h2>Todo list</h2>
            </div>
            <div className="todos">
                {props.todos.length ? (
                    props.todos.map((todo) => (
                        <TodoListElement id={todo.id} key={todo.id} title={todo.title} content={todo.content} onRemoveTodo={props.onRemoveTodo} />
                    ))
                ) : (
                    <div>Список пуст...</div>
                )}
            </div>
        </div>
    );
}

//
