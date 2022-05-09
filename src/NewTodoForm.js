import "./NewTodoForm.css";
import { useState } from "react";
export default NewTodoForm;

function NewTodoForm(props) {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState(false);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (title === "") {
            setTitleError(true);
        } else {
            setTitleError(false);
        }

        if (title !== "") {
            props.onNewTodo({
                id: Math.random(),
                title: title,
            });
            setTitle("");
        }
    };

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="newTodoForm">
            <form onSubmit={formSubmitHandler} >
                <h2>Add task</h2>
                <div className="addNewTodoForm">
                    <label htmlFor="new-todo-header">*Title</label>
                    <input
                        className={titleError ? "error" : ""}
                        value={title}
                        placeholder='Название дела'
                        type="text"
                        name="new-todo-header"
                        onChange={titleChangeHandler}
                    ></input>
                    <button type="submit">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 0.75H5.75V5.75H0.75V8.25H5.75V13.25H8.25V8.25H13.25V5.75H8.25V0.75Z" fill="white" />
                    </svg>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
