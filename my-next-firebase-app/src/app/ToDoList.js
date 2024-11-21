import React, { useState } from 'react';

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if(task != ""){
        setTaskList([
            ...taskList,
            {id: Date.now(), text: task, completed: false}
        ]);
        setTask("");
    }
  } 

  const completeTask = (taskid) => {
    setTaskList(taskList.filter(t => t.id !== taskid));
  }

  const deleteTask = (taskid) => {
    setTaskList(taskList.filter(t => t.id !== taskid));
  }
  return (
      <div>
        <h1>ToDo List</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
        <ul>
          {taskList.map((t) => (
            <li key={t.id}>
              <span onClick={() => completeTask(t.id)}>
                {t.text} {t.completed ? "(Completed)" : ""}
              </span>
              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
  );
}