import { useContext } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, Users, CheckSquare, Settings, LogOut } from 'lucide-react';

export default function DashboardLayout() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
        <div className="p-6 border-b text-xl font-bold text-indigo-600">Mini Admin</div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/users" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
            <Users size={20} /> Users
          </Link>
          <Link to="/tasks" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
            <CheckSquare size={20} /> Tasks
          </Link>
          <Link to="/settings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
            <Settings size={20} /> Settings
          </Link>
        </nav>
        <div className="p-4 border-t">
          <p className="text-sm text-gray-500 mb-4">Logged in as: <br/><span className="font-semibold text-gray-800">{user?.name}</span></p>
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium w-full p-2 rounded-lg hover:bg-red-50 transition">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}