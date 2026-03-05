function TaskItem({ task, toggleTask, deleteTask }) {

  return (

    <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-xl transition hover:scale-105`}>

      <img
        src={task.image}
        alt="task"
        className="w-full h-40 object-cover"
      />

      <div className="p-4 text-white">

        <h2 className={`text-xl font-bold ${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </h2>

        <p className="text-sm text-indigo-200">
          Brand: {task.brand}
        </p>

        <p className="text-sm text-gray-300">
          {task.description}
        </p>

        <p className="text-sm text-yellow-400">
          Price: {task.price}
        </p>

        <p className="text-sm mt-1">
          Priority: {task.priority}
        </p>

        <div className="flex gap-3 mt-4">

          <button
            onClick={() => toggleTask(task.id)}
            className="bg-green-600 px-3 py-2 rounded-md text-sm"
          >
            {task.completed ? "Undo" : "Complete"}
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-600 px-3 py-2 rounded-md text-sm"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );
}

export default TaskItem;