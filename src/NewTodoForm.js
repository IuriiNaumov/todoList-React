import "./NewTodoForm.css";
import { useState } from "react";
export default NewTodoForm;

function NewTodoForm(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [titleError, setTitleError] = useState(false);
    const [contentError, setContentError] = useState(false);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (title === "") {
            setTitleError(true);
        } else {
            setTitleError(false);
        }

        if (content === "") {
            setContentError(true);
        } else {
            setContentError(false);
        }

        if (title !== "" && content !== "") {
            props.onNewTodo({
                id: Math.random(),
                title: title,
            });
            setTitle("");
            setContent("");
        }
    };

    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    };

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="newTodoForm">
            <form onSubmit={formSubmitHandler} >
                <h2>New todo</h2>
                <div className="addNewTodoForm">
                    <label htmlFor="new-todo-header">*Title</label>
                    <input
                        className={titleError ? "error" : ""}
                        value={title}
                        id="new-todo-header"
                        type="text"
                        name="new-todo-header"
                        onChange={titleChangeHandler}
                    ></input>
                    <label htmlFor="new-todo-content">*Content</label>
                    <textarea
                        className={contentError ? "error" : ""}
                        onChange={contentChangeHandler}
                        value={content}
                        id="new-todo-content"
                        type="text"
                        cols="4"
                    ></textarea>
                    <button type="submit">
                        Add task
                    </button>
                </div>
            </form>
        </div>
    );
}
