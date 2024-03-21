import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="instructions">
        <p>
          Instructions: Create an interactive to-do list application where users
          can add and remove tasks. Type a task on the input field to add in the
          list of tasks and click remove button to delete the task. Note that in
          this program, when the page is refreshed then the list of task will
          disappear.
        </p>
      </div>

      <div>
        <label>Input task</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={inputValue}
            onChange={handleInputChange}
            id="task"
            name="task"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleAddTask}
            >
              Add
            </button>
          </div>
        </div>

        <div>
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {task}
                <button
                  class="btn btn-outline-secondary"
                  onClick={() => handleRemoveTask(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div />
    </div>
  );
}

export default DoList;
