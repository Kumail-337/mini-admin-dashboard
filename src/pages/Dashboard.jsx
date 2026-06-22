import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Dashboard() {
  const [stats, setStats] = useState({ users: 0, tasks: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, tasksRes] = await Promise.all([
          api.get('/users'), 
          api.get('/tasks')
        ]);
        setStats({ users: usersRes.data.length, tasks: tasksRes.data.length });
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Users</h3>
          <p className="text-4xl font-bold text-indigo-600 mt-2">{stats.users}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Tasks</h3>
          <p className="text-4xl font-bold text-indigo-600 mt-2">{stats.tasks}</p>
        </div>
      </div>
    </div>
  );
}