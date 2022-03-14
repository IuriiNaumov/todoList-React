import "./TodoList.css";
import TodoListElement from "./TodoListElement";
export default TodoList;

function TodoList(props) {
    return (
        <div id="todo-list">
            <h2>To do list</h2>
            <div id="todos">
                {props.todos.length ? (
                    props.todos.map((todo) => (
                        <TodoListElement
                            id={todo.id}
                            key={todo.id}
                            title={todo.title}
                            content={todo.content} 
                            onRemoveTodo={props.onRemoveTodo}
                        /> ))) : (<div id="epmtyList">Список пуст...</div>)}
            </div>
        </div>
    );
}

//
