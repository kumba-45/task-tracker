import { useState } from "react";
const AddTask = ({ taskAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState(new Date());
    const [reminder, setReminder] = useState(false);
    const [textErr, setTextErr] = useState("");
    const [dayErr, setDayErr] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        let formValidation = isValid();
        let task = {
            task: text,
            time: day,
            reminder: reminder
        }
        if (formValidation) {
            taskAdd(task);
            setText('');
            setDay('');
            setReminder(false)
        } else {
            setTimeout(() => {
                setDayErr("");
                setTextErr("");
            }, 2000)
        }
    }

    const isValid = () => {
        let valid = true;
        if (text.length < 1) {
            valid = false;
            setTextErr("please add a task.")
        }
        if (day.length < 1) {
            valid = false;
            setDayErr("please add a day.")
        }
        return valid;
    }

    return (

        <form className="add-form" onSubmit={submitHandler}>
            <div className="form-control">
                <label>Add Task</label>
                <input type="Text" placeholder="Add a Task" value={text} onChange={(e) => { setText(e.target.value) }} />
                <p className="err-text">{textErr}</p>
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="date" placeholder="Add a Date" value={day} onChange={(e) => { setDay(e.target.value) }} />
                <p className="err-text">{dayErr}</p>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e) => { setReminder(e.currentTarget.checked) }} />
            </div>
            
            <input className="btn btn-block" type="submit" value="Add a Task" />
        </form>

    )
};
export default AddTask;