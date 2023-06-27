import React from 'react'
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onDouble }) => {
    return (
        <div className={task.reminder ? ' task reminder' : 'task'} 
         onDoubleClick={() => { onDouble(task.id) }}
        >
            <h3>{task.task} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => { onDelete(task.id) }} /></h3>
            <p>{task.time}</p>
        </div>
    )
}

export default Task
