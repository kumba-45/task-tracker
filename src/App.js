import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [task, setTasks] = useState([
    {
      id: 1,
      task: "Doctor appointment",
      time: "friday 25 may",
      reminder: true,
    },
    {
      id: 2,
      task: "Foot ball Match",
      time: "Staurday 25 may",
      reminder: true,
    },
    {
      id: 3,
      task: "Wake up 6am",
      time: "Sunday 25 may",
      reminder: true,
    },
    {
      id: 4,
      task: "Driving",
      time: "friday 25 may",
      reminder: true,
    },
  ]);

  const deleteTaskHandler = (id) => {
    setTasks(task.filter((obj) => obj.id !== id));
  };
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      task.map((item) =>
        item.id === id ? { ...item, reminder: !item.reminder } : item
      )
    );
  };
  const taskAdd = (object) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...object };

    setTasks([...task, newTask]);
  };
  const taskFormShow = () => {
    setShowAddTask(!showAddTask);
  };
  return (
    <div className="container">
      <Header onAdd={taskFormShow} show={showAddTask}/>
      {showAddTask && <AddTask taskAdd={taskAdd} />}
      {task.length !== 0 ? (
        <Tasks
          task={task}
          onDelete={deleteTaskHandler}
          onDouble={toggleReminder}
        />
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
}

export default App;
