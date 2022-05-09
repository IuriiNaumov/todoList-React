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
                date: new Date(),
            });
            setTitle("");
            props.onCloseForm()
        }
    };

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="newTodoForm">
            <form onSubmit={formSubmitHandler} >
                <div className="addNewTodoForm">
                    <h2>New task</h2>
                    <input
                        className={titleError ? "error" : ""}
                        value={title}
                        placeholder='Название задачи'
                        onChange={titleChangeHandler}
                    ></input>
                    <button>
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
