import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const CreateTask = ({ modal, toggle, save }) => {
  const [taskInp, setTaskInp] = useState("");
  const [descriptionInp, setDescriptionInp] = useState("");
  const HandleInpChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskInp") {
      setTaskInp(value);
    } else {
      setDescriptionInp(value);
    }
  };
  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["name"] = taskInp;
    taskObj["Description"] = descriptionInp;
    save(taskObj);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Name A Task !</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name *</label>
            <input
              type="text"
              className="form-control m-2"
              placeholder="Eg.Meditate"
              value={taskInp}
              onChange={HandleInpChange}
              name="taskInp"
            ></input>
          </div>
          <div className="form-group">
            <label>Task Description !</label>
            <textarea
              rows="5"
              className="form-control m-2"
              value={descriptionInp}
              onChange={HandleInpChange}
              name="Description"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create!
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
