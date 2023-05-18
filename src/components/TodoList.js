import React, { useEffect, useState } from "react";
import CreateTask from "../modal/createTask";
import Cards from "./Cards";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    let arrOfTask = localStorage.getItem("taskList");
    if (arrOfTask) {
      let jsonArray = JSON.parse(arrOfTask);
      setTaskList(jsonArray);
    }
  }, []);
  const toggle = () => {
    setModal(!modal);
  };
  const saveTask = (Obj) => {
    let tempList = taskList;
    tempList.push(Obj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setModal(false);
    setTaskList(tempList);
    window.location.reload();
  };
  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };
  const updateMainArray = (obj, index) => {
    let updateList = taskList;
    updateList[index] = obj;
    console.log(updateList);
    localStorage.setItem("taskList", JSON.stringify(updateList));
    setTaskList(updateList);
    window.location.reload();
  };
  return (
    <>
      <div className="headerContainer text-center">
        <h3 className="">To-Do-List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="todoCards">
        {taskList.map((obj, index) => (
          <Cards
            taskObj={obj}
            index={index}
            deleteTask={deleteTask}
            updateMainArray={updateMainArray}
          />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
