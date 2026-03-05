import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (

    <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10">

      <h1 className="text-4xl font-bold text-center text-blue-400 mb-6 tracking-wider">
        🚀 Task Manager
      </h1>

      <p className="text-center text-indigo-200 mb-8">
        Total Tasks: {tasks.length} | Completed: {completedCount}
      </p>

      <AddTaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

    </div>

  );
}

export default TaskManager;