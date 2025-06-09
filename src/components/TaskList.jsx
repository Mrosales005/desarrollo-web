import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

 const handleAddTask = () => {
  console.log('Click en agregar tarea'); // TEMPORAL
  if (newTask.trim() === '') return;

  const task = {
    id: Date.now(),
    title: newTask
  };

  setTasks([...tasks, task]);
  setNewTask('');
};


  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5 text-center">
      <h2>TO-DO NOW</h2>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar tarea</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ margin: '10px 0' }}>
            {task.title}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => handleDeleteTask(task.id)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
