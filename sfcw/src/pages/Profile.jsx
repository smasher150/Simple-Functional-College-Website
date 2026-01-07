import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  return (
    <div className="page">
      <h2>👤 My Profile</h2>
      <p className="text-center mb-6">Manage your account information and preferences.</p>

      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">👤</div>
          <h3 className="text-xl font-semibold">{user?.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <span className="font-medium">Name:</span>
            <span>{user?.name}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <span className="font-medium">Email:</span>
            <span>{user?.email}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <span className="font-medium">Member Since:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;