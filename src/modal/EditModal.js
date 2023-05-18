import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const EditTask = ({ modal, toggle, update, taskObj }) => {
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
  useEffect(() => {
    setTaskInp(taskObj.name);
    setDescriptionInp(taskObj.Description);
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    let updateObj = taskObj;
    updateObj["name"] = taskInp;
    updateObj["Description"] = descriptionInp;
    update(updateObj);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Your Task Below !</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>New Task Name *</label>
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
        <Button color="primary" onClick={handleUpdate}>
          Update!
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
