import { useState } from "react";
import "./App.css";

function formatHour(hour:number): string {
  const suffix = hour < 12 ? "am" : "pm";
  const displayHour = hour % 12 == 0 ? 12 : hour % 12;
  return `${displayHour}${suffix}`;
}

function App() {
  const hours : number[] = [];
  for (let h = 8; h <= 22; h++){
    hours.push(h);
  }

  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function addTask(){
    const trimmed = newTask.trim();
    if (trimmed == "") return;
    setTasks([...tasks, trimmed]);
    setNewTask("")
  }

  return (
    <div className="layout">
      <div className="task-panel">
        <h2>Tasks</h2>
        <div className="task-input">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") addTask();
            }}
            placeholder="New task..."
            />
            <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, i) => (
            <li key={i} className="task-card">
              {task}
            </li>
          ))}
        </ul>
      </div>

      <div className="day-view">
        <h2>Today</h2>
        {hours.map((hour) => (
          <div key={hour} className="hour-row">
            <span className="hour-label">{formatHour(hour)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;