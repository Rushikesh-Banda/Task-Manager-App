import { useState } from "react";

function AddTaskForm({ addTask }) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (title.length < 3) {
      setError("Minimum 3 characters required");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
      image: "https://picsum.photos/200",
      brand: "Personal",
      description: "Task description example",
      price: "$0"
    };

    addTask(newTask);

    setTitle("");
    setPriority("Low");
    setError("");
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white/10 p-6 rounded-xl border border-white/20 mb-8"
    >

      <div className="mb-4">

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/40 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
        />

        {error && (
          <p className="text-red-400 text-sm mt-2">{error}</p>
        )}

      </div>

      <div className="flex gap-4">

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-3 rounded-lg bg-black/40 text-white border border-gray-600"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
        >
          Add Task
        </button>

      </div>

    </form>

  );
}

export default AddTaskForm;