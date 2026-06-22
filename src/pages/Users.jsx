import { useState, useEffect } from 'react';
import api from '../services/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'User' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    await api.post('/users', newUser);
    setNewUser({ name: '', email: '', role: 'User' });
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Management</h1>
      
      {/* Add User Form */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Add New User</h2>
        <form onSubmit={handleAddUser} className="flex gap-4 items-end flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input type="text" value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none" required />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input type="email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none" required />
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2.5 rounded hover:bg-indigo-700 transition font-medium">Add User</button>
        </form>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 font-semibold text-gray-600">Name</th>
              <th className="p-4 font-semibold text-gray-600">Email</th>
              <th className="p-4 font-semibold text-gray-600">Role</th>
              <th className="p-4 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
                <td className="p-4 text-gray-800">{user.name}</td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">{user.role}</span>
                </td>
                <td className="p-4">
                  <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}