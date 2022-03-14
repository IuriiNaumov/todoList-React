import hide from "./images/hide.png";
import del from "./images/del.png";
export default TodoListElement;

function TodoListElement(props){

	const removeTodoHandler = (event) => {
		props.onRemoveTodo(props.id);
	}

    return(
        <div className="todo">
				<div className="todo-header">
					<h3>{props.title}</h3>
					<img className="delete" src={del} alt="delete" onClick={removeTodoHandler}/>
					<img className="hide" src={hide} alt="hide"/>
				</div>
				<div className="content">{props.content}</div>
			</div>
    )
}
