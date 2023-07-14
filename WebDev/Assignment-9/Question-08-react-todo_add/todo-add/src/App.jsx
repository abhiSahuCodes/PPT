import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

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
            <p className="status">Status: Pending</p>
            <div className="todoButtons">
              <button className="update">
                Update Status
              </button>
              <button className="remove">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
