import "./NewTodoForm.css";
import { useState } from "react";
export default NewTodoForm;

function NewTodoForm(props) {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [option, setOption] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [date, setDate] = useState("");

    const closeFormHandler = () => {
        props.onCloseForm();
    };

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
                date: date,
                hours: hours,
                minutes: minutes,
                option: option,
            });
            setTitle("");
            setHours("");
            setMinutes("");
            setOption("");
            setDate(undefined);
            props.onCloseForm();
        }
    };

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const hoursChangeHandler = (event) => {
        setHours(event.target.value);
    };
    const minutesChangeHandler = (event) => {
        setMinutes(event.target.value);
    };
    const optionChangeHandler = (event) => {
        setOption(event.target.value);
    };

    return (
        <div className="modal">
            <div className="newTodoForm">
                <form onSubmit={formSubmitHandler}>
                    <div className="addNewTodoForm">
                        <div className="closeForm">
                            <div className="closeFormButton" onClick={closeFormHandler}>
                                X
                            </div>
                        </div>
                        <h2>New task</h2>
                        <input className={titleError ? "error" : ""} value={title} placeholder="Task's name" onChange={titleChangeHandler}></input>
                        <div className="time">
                            <input value={hours} placeholder="Enter hour" type="number" min="0" max="12" onChange={hoursChangeHandler}></input>
                            <p>։</p>
                            <input value={minutes} placeholder="Enter minutes" type="number" min="0" max="60" onChange={minutesChangeHandler}></input>
                            <select onChange={optionChangeHandler}>
                                <option value="Not choosen">Not selected</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                        <input type="date" value={date} onChange={dateChangeHandler}></input>
                        <button>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 0.75H5.75V5.75H0.75V8.25H5.75V13.25H8.25V8.25H13.25V5.75H8.25V0.75Z" fill="white" />
                            </svg>
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
