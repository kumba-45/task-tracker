import React from 'react'
import Task from './Task'

export default function Tasks({ task, onDelete, onDouble }) {

    return (
        task.map((item) => {
            return (
                <Task key={item.id} task={item}
                 onDelete={onDelete}
                  onDouble={onDouble}
                   />
            )
        })
    )
}

