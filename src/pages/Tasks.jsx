import { useState, useEffect } from 'react';
import api from '../services/api';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await api.get('/tasks');
    setTasks(response.data);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    await api.post('/tasks', { title: newTaskTitle, status: 'Pending' });
    setNewTaskTitle('');
    fetchTasks();
  };

  const updateStatus = async (task, newStatus) => {
    await api.patch(`/tasks/${task.id}`, { status: newStatus });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  }

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(t => t.status === filter);

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Task Management</h1>

      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <form onSubmit={handleAddTask} className="flex gap-2 flex-1 min-w-[300px]">
          <input type="text" placeholder="What needs to be done?" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 font-medium">Add</button>
        </form>
        
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 border border-gray-300 rounded shadow-sm outline-none bg-white font-medium text-gray-700">
          <option value="All">All Tasks</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="grid gap-3">
        {filteredTasks.map(task => (
          <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-wrap justify-between items-center gap-4 hover:shadow-md transition">
            <span className={`font-medium ${task.status === 'Completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              {task.title}
            </span>
            <div className="flex items-center gap-3">
              <select value={task.status} onChange={(e) => updateStatus(task, e.target.value)} className={`text-sm border rounded p-1.5 font-medium outline-none ${
                task.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' : 
                task.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-yellow-50 text-yellow-700 border-yellow-200'
              }`}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <button onClick={() => handleDelete(task.id)} className="text-red-500 hover:text-red-700 text-sm font-medium ml-2">Delete</button>
            </div>
          </div>
        ))}
        {filteredTasks.length === 0 && <p className="text-gray-500 text-center py-4">No tasks found.</p>}
      </div>
    </div>
  );
}