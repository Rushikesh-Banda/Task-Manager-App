import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {

  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-300">
        No tasks yet...
      </p>
    );
  }

  return (

    <div className="grid md:grid-cols-2 gap-6">

      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}

    </div>

  );
}

export default TaskList;