import React, { useState } from 'react';

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if(task != ""){
        setTask([
            ...task,
            {id: Date.now(), text: task, completed: false}
        ]);
        setTask("");
    }
  } 

  const completeTask = (taskid) => {
    setTaskList(taskList.filter(t => t.id !==taskid));
  }



  return (
    <>

    </>
  );
}