import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const deleteAll = () => {
    setTasks([]);
  };

  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <div className="content">
        <div className="container-wrapper">
          <div className="to-do-list-container">
            <h3>To-Do-List</h3>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Add a new task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
            />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>
          <div className="add-task-container">
            <ul>
              {filteredTasks.map((item, index) => (
                <li key={index} className="task-item">
                  {item}
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="deleteAll">
            <button onClick={() => deleteAll()}> Delete All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
