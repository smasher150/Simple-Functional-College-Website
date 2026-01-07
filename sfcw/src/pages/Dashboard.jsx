import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="page">
      <h2>📊 Welcome to Your Dashboard, {user?.name}!</h2>
      <p className="text-center mb-6">Here's your personalized college experience overview.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="text-3xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">My Courses</h3>
          <p className="text-gray-600 mb-4">View and manage your enrolled courses.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            View Courses
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="text-3xl mb-4">📅</div>
          <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
          <p className="text-gray-600 mb-4">Check out events you're interested in.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            View Events
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="text-3xl mb-4">💬</div>
          <h3 className="text-xl font-semibold mb-2">Messages</h3>
          <p className="text-gray-600 mb-4">Stay connected with faculty and peers.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
            View Messages
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded">
            <div className="text-2xl">🎓</div>
            <div>
              <p className="font-medium">Welcome to Simple College!</p>
              <p className="text-sm text-gray-600">You joined our community today</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded">
            <div className="text-2xl">📝</div>
            <div>
              <p className="font-medium">Account Created</p>
              <p className="text-sm text-gray-600">Your student account is now active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;