export default function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="bg-white p-8 rounded-xl shadow-sm max-w-2xl border border-gray-200">
        <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Profile Settings</h2>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
            <input type="text" defaultValue="Admin User" className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Update Password</label>
            <input type="password" placeholder="Enter new password" className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="pt-4 border-t border-gray-100">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" defaultChecked />
              <span className="text-sm font-medium text-gray-700">Enable Email Notifications</span>
            </label>
          </div>
          <button className="mt-6 bg-indigo-600 text-white px-6 py-2.5 rounded-md hover:bg-indigo-700 transition font-medium w-full sm:w-auto">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}