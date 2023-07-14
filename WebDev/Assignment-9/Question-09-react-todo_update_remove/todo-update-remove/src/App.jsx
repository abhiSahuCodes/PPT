import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("Pending");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTodos((prev) => [...prev, task]);
      setTask("");
    }
  };

  const handleUpdate = () => {
    if (status === "Completed") {
      setStatus("Pending");
    } else {
      setStatus("Completed");
    }
  };

  const handleRemove = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task..."
        />
        <button type="submit" className="addTask">
          Add
        </button>
      </form>
      <div className="todoContainer">
        {todos.map((todo, index) => (
          <div className="todo" key={index}>
            <p className="title">
              {index + 1}. {todo}
            </p>
            <p className="status">Status: {status}</p>
            <div className="todoButtons">
              <button className="update" onClick={handleUpdate}>
                Update Status
              </button>
              <button className="remove" onClick={() => handleRemove(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
